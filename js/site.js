var Airtable = require('airtable');
var base = new Airtable({apiKey:'keycXkSkSRAAK3Y8G'}).base('appjyVMWWX26yFWud');

base('Table 1').find('rec4mBVQBXkoHki2g', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text');
    myElement.innerHTML = record.get('Description');

}, function done(err) {
    if (err) { console.error(err); return; }
});


var Airtable = require('airtable');
var base = new Airtable({apiKey:'keycXkSkSRAAK3Y8G'}).base('appjyVMWWX26yFWud');

base('Table 1').find('recsmCbWeJVICfkdw', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text2');
    myElement.innerHTML = record.get('Description');

}, function done(err) {
    if (err) { console.error(err); return; }
});


var Airtable = require('airtable');
var base = new Airtable({apiKey:'keycXkSkSRAAK3Y8G'}).base('appjyVMWWX26yFWud');

base('Table 1').find('rect0kwUTNSlgtnyS', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text3');
    myElement.innerHTML = record.get('Description');

}, function done(err) {
    if (err) { console.error(err); return; }
});