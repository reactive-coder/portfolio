import { PropsWithChildren } from "react";

const Container: Function = (props: PropsWithChildren<any>) => (
    <div className="w-full px-4 md:px-16 lg:px-32 xl:px-48">
        {props.children}
    </div>
)

export default Container