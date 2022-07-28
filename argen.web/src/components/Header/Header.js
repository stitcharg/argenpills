import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'

export default function Header() {
    return (
        <Container>
            <Row>
                <Col className="col-xs-12 col-md-6">
                    <Logo />
                </Col>

                <Col className="col-xs-6 col-md-6">
                    <Search />
                </Col>
            </Row>
        </Container>
    )
}
