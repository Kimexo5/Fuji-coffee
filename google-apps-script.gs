/**
 * Fuji Coffee backend: order receiver + shared availability & shop status.
 *
 * Bound to a Google Sheet: Extensions > Apps Script > paste this file.
 * Deploy > Manage deployments > edit the Web app > Deploy.
 *
 * Sheet "Availability":
 *   A1 -> JSON map of itemId -> available (true/false)
 *   A2 -> JSON shop status { closed, autoClosedOn }
 *
 * The write passphrase lives in Project Settings > Script Properties as
 * ADMIN_PASSPHRASE (defaults to "0123" if unset).
 */

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "";
  if (action === "availability") {
    const sheet = getAvailabilitySheet();
    return json({ availability: readAvailability(sheet), shop: readShop(sheet) });
  }
  return json({ ok: true });
}

function doPost(e) {
  let data = {};
  if (e.parameter) {
    Object.keys(e.parameter).forEach(function (k) { data[k] = e.parameter[k]; });
  }
  if (e.postData && e.postData.contents) {
    try {
      var parsed = JSON.parse(e.postData.contents);
      if (parsed && parsed.payload && parsed.payload.data) parsed = parsed.payload.data;
      else if (parsed && parsed.data) parsed = parsed.data;
      Object.keys(parsed).forEach(function (k) { data[k] = parsed[k]; });
    } catch (ignore) {}
  }

  // --- Availability / shop update ---
  if (data.action === "availability") {
    const pass = data.pass || "";
    const expected = PropertiesService.getScriptProperties().getProperty("ADMIN_PASSPHRASE") || "0123";
    if (pass !== expected) {
      return json({ error: "unauthorised" });
    }

    const sheet = getAvailabilitySheet();

    // Item availability: merge the incoming map into the stored one.
    if (data.availability && typeof data.availability === "object") {
      const merged = Object.assign({}, readAvailability(sheet), data.availability);
      sheet.getRange("A1").setValue(JSON.stringify(merged));
    }

    // Shop status: replace with the validated incoming value.
    if (data.shop && typeof data.shop === "object") {
      const shop = {
        closed: data.shop.closed === true,
        autoClosedOn: typeof data.shop.autoClosedOn === "string" ? data.shop.autoClosedOn : null
      };
      sheet.getRange("A2").setValue(JSON.stringify(shop));
    }

    return json({ availability: readAvailability(sheet), shop: readShop(sheet) });
  }

  // --- Order ---
  const orderSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders") || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var orderNumber = data["order_number"] || data["orderNumber"] || "(no number)";
  var name = data["name"] || "";
  var phone = data["phone"] || "";
  var area = data["deliveryArea"] || data["area"] || "";
  var address = data["address"] || "";
  var items = data["items"] || "";
  var total = data["total"] || "";
  var note = data["note"] || "";

  orderSheet.appendRow([new Date(), orderNumber, name, phone, area, address, items, total, note]);

  var notifyTo = "fuji.coffeeee@gmail.com, Sahbolisou123@gmail.com, ilyesbentemam@gmail.com";
  var subject = "New Fuji Coffee order " + orderNumber;
  var body = "New delivery order\n\n";
  body += "Order: " + orderNumber + "\n";
  body += "Name: " + name + "\n";
  body += "Phone: " + phone + "\n";
  body += "Delivery area: " + area + "\n";
  if (address) { body += "Address: " + address + "\n"; }
  body += "Items: " + items + "\n";
  body += "Total: " + total + "\n";
  if (note) { body += "Note: " + note + "\n"; }
  body += "\nSheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();

  MailApp.sendEmail(notifyTo, subject, body);

  return json({ ok: true });
}

function readAvailability(sheet) {
  try {
    const raw = sheet.getRange("A1").getValue();
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch (err) {}
  return {};
}

function readShop(sheet) {
  try {
    const raw = sheet.getRange("A2").getValue();
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        return {
          closed: parsed.closed === true,
          autoClosedOn: typeof parsed.autoClosedOn === "string" ? parsed.autoClosedOn : null
        };
      }
    }
  } catch (err) {}
  return { closed: false, autoClosedOn: null };
}

function getAvailabilitySheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName("Availability");
  if (!sh) {
    sh = ss.insertSheet("Availability");
    sh.getRange("A1").setValue("{}");
  }
  return sh;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function authorizeMail() {
  MailApp.sendEmail("fuji.coffeeee@gmail.com", "Fuji Coffee - authorization test", "If you receive this, email notifications are enabled.");
}
