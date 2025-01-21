import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Greeting(){

    return (<div>hello</div>)
}

root.render(
<div>
<h1>
    hello
</h1>
<Greeting/>
</div>
);