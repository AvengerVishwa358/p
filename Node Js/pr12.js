Aim: Write a Node.js program to read, parse, modify, and write data in a JSON file using 
the File System(fs)module. 

const fs require('fs');
// Step 1: Read JSON file
fs.readFile('demo_data.json', 'utf8', (err, data) {
if (err) {
      console.log("Error reading file:", err);
      return;
}

// Step 2: Parse JSON data

let jsonData JSON.parse(data);

console.log("Original Data:", jsonData);

// Step 3: Modify JSON data

jsonData.Name = "Infosys"; // update value

jsonData.Country "India"; // add new key-value pair

// Step 4: Convert back to JSON string

const newData JSON.stringify(jsonData, null, 2);

// Step 5: Write updated data to file

fs.writeFile('data.json', newData, (err) ->

if (err) {
      console.log("Error writing file:", err);
      return;
  }
  console.log("File updated successfully!");
  });
});
