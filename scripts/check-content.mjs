import fs from 'fs';
import path from 'path';

const cvPath = path.join(process.cwd(), 'src', 'content', 'cv.ts');

try {
  const content = fs.readFileSync(cvPath, 'utf8');
  
  if (content.includes('SITE_PUBLISHED = true')) {
    if (content.includes('[') && content.includes(']') && (content.includes('Họ và tên') || content.includes('Vị trí'))) {
      console.error('❌ ERROR: SITE_PUBLISHED is true but placeholders are still present in cv.ts!');
      process.exit(1);
    }
    console.log('✅ Content check passed: No placeholders found while SITE_PUBLISHED is true.');
  } else {
    console.log('ℹ️ SITE_PUBLISHED is false. Skipping placeholder check.');
  }
} catch (err) {
  console.error('Failed to read cv.ts', err);
  process.exit(1);
}
