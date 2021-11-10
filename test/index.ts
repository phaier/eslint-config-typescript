export function testFunction(arg: number): string {
  const flag = true;

  if (flag) {
    console.log(`flagged`);

    window.alert('flagged');
  }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  return arg.toString();
}
