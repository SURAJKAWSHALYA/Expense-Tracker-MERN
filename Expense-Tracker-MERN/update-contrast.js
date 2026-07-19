const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'client', 'src');

function updateColors(filePath) {
  const ext = path.extname(filePath);
  if (ext === '.jsx' || ext === '.js') {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Increase contrast for light mode text
    content = content.replace(/text-slate-600/g, 'text-slate-700');
    content = content.replace(/text-slate-500(?! dark:)/g, 'text-slate-600');
    
    // For inputs and borders, slightly darker borders in light mode can help
    content = content.replace(/border-slate-200/g, 'border-slate-300');

    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function traverse(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else {
      updateColors(fullPath);
    }
  });
}

traverse(directoryPath);
console.log('Contrast updated globally for light mode.');
