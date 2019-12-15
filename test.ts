async function helloWorld(): Promise<string> {
    const res = await fetch('/static/data.json');
    const txt = await res.text();
    return txt;
}
(async ()=>{
    const txt = await helloWorld()
    console.log(`async func: `, txt)
})()