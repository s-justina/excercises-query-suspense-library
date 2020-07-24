import React from 'react';
import './styles.css';
import {ReactQueryConfigProvider} from "react-query";


import PokemonPager from "./Pokemon";

const queryConfig={
    suspense: true
};

function App() {
    return (
        <ReactQueryConfigProvider config={queryConfig}>
            <div className="App">
                <h2>We will see what happens</h2>
                <React.Suspense fallback={<p>loading</p>}>
                    <PokemonPager/>
                </React.Suspense>
            </div>
        </ReactQueryConfigProvider>

    );
}

export default App;
