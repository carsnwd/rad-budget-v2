import { Component } from "solid-js";

export const PanelHalf: Component<{title: string}> = (props) => {
    return <div class="border-stone-200 bg-stone-100 border">{props.title}</div>;
};