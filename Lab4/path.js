const path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.join( "users", "arjun", "documents", "project"));
console.log(path.normalize("//folder//subfolder////file.txt"));
console.log(path.isAbsolute("C:\Users\ASUS\OneDrive\Desktop\sem4\BEWT\Lab4")) // it gives false becaue it's forwardslace reqired backslace for true
console.log(path.isAbsolute("C:/Users/ASUS/OneDrive/Desktop/sem4/BEWT/Lab4"))
console.log(path.resolve("folder", "subfolder", "app.js"))// it gives absolute path



