import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Search() {
    const [query, setQuery] = useState("");
    const { search } = window.location;

    useEffect(() => {
        var searchText = new URLSearchParams(search).get('s');
        if (searchText === null) searchText = '';

        setQuery(searchText);
    }, []);

    return (
        <form action="/" method="get">
            <div>
                <input name="s"
                    placeholder="Ingrese texto a buscar"
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                    autoComplete="false" />
                <Button type="submit" className="btn btn-primary btn-sm">Buscar</Button>
            </div>
        </form>
    );
}