import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        // setCategories(['SNK',...categories]);
        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (event) => onAddCategory(event) }
            />

            {/* Listado de Gif */}
            
            <ol>
                { 
                    categories.map( category => (
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                    ))
                }
            </ol>


        </>
    )
}