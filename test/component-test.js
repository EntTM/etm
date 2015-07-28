import test from 'tape';
import createComponent from './create-component';
import Hello from '../app/component';



test("Hello component", (t) => {
  const result = createComponent(Hello);

  t.equal(result.type, 'h1', 'Should be an h1.');
  t.equal(result.props.children, 'Hello World!', 'Should have hello world.')
  t.end();
});
