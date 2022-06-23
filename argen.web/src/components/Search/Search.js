import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

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
            <Row>
                <Col>
                    <div className="input-group input-group-sm">
                        <input name="s"
                            placeholder="Ingrese texto a buscar"
                            onChange={event => setQuery(event.target.value)}
                            value={query}
                            autoComplete="false"
                            className="form-control input-sm"
                        /></div>
                </Col>
                <Col>
                    <Button type="submit" className="btn btn-primary btn-sm">Buscar</Button>
                </Col>
            </Row>
        </form >
    );
}