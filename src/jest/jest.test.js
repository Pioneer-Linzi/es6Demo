import JestDemo from './jest'



test('jest demo test ',()=>{
    let jestDemo =new JestDemo();
    const name= 'linzi';
    jestDemo.setName(name);
    expect(jestDemo.getName()).toBe(name);
});