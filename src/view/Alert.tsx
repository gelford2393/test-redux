import React from 'react'
import { Container, Card, Title, Button } from '../style/Style'
import CardMessages from './CardMessages'
import addIcon from './../assets/icons/add.svg'
const Alert = () => {
    return (
        <Container>
            <Card>
                <Title>
                    Alerts
                </Title>
                <Button><span><img src={addIcon} alt="addIcon" /> New Alert</span></Button>
            </Card>
            <CardMessages />
        </Container>

    )
}

export default Alert