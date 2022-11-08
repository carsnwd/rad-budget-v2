import { Component } from "solid-js";

export const PanelFull: Component<{title: string}> = (props) => {
    return <div class="border-stone-200 bg-stone-100 border h-[80vh]">
        {props.title}
    </div>;
};