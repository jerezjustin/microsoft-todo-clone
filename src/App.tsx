import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { Suspense } from "react";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default App;
