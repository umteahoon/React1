import * as Foo from "./NamedComponent"

export default function NamedComponetTest(){
    return(
        <>
            <h1>NamedComponent Test </h1>
            <Foo.NamedComponet1/>
            <Foo.NamedComponet2/>
            <Foo.NamedComponet3/>
        </>
    )
}