const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'client', 'src', 'components', 'layout');
const pagesPath = path.join(__dirname, 'client', 'src', 'pages');

function reduceWhite(filePath) {
  const ext = path.extname(filePath);
  if (ext === '.jsx' || ext === '.js') {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace pure white backgrounds with tinted blue backgrounds
    content = content.replace(/bg-white\/90/g, 'bg-indigo-50/70');
    content = content.replace(/bg-white\/80/g, 'bg-indigo-50/60');
    content = content.replace(/bg-white(?![\/\w])/g, 'bg-indigo-50/80');
    
    // For specific files like LandingPage, Features, HowItWorks, etc where there is border-white/80 or border-slate-300/80
    content = content.replace(/border-white\/80/g, 'border-indigo-200');
    content = content.replace(/border-slate-300\/80/g, 'border-indigo-200');
    content = content.replace(/border-slate-300/g, 'border-indigo-200');
    
    // Adjust shadow colors to match the new blue aesthetic
    content = content.replace(/rgba\(15,23,42,0\.08\)/g, 'rgba(79,70,229,0.08)');
    content = content.replace(/rgba\(15,23,42,0\.06\)/g, 'rgba(79,70,229,0.06)');

    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function traverse(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else {
      reduceWhite(fullPath);
    }
  });
}

traverse(directoryPath);
traverse(pagesPath);
console.log('Reduced white backgrounds globally in favor of blue tints.');
