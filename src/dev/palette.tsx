import {Category, Component, Palette, Variant} from "@react-buddy/ide-toolbox";
import MantinePalette from "@react-buddy/palette-mantine";

export const PaletteTree = () => (
    <Palette>
        <MantinePalette/>
        <Category name={"persoonlijk"}>
            <Component name={"App"}>
                <Variant name={"default"}>
                    <div>App</div>
                </Variant>
            </Component>
        </Category>
    </Palette>
);