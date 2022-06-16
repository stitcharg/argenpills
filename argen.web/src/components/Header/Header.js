import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'

export default function Header() {
    return (
        <Container>
            <Row>
                <Col className="col-6">
                    <Logo />
                </Col>

                <Col>
                    <Search />
                </Col>
            </Row>
        </Container>
    )
}
