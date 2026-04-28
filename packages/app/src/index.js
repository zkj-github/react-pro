import { Button } from '@monorepo/ui';
import { formatDate, capitalize } from '@monorepo/utils';

const btn = Button({ text: 'Click Me' });
const today = formatDate(new Date());
const greeting = capitalize('hello world');

console.log('=== Demo App ===');

console.log('Button:', btn);
console.log('Date:', today);
console.log('Greeting:', greeting);
