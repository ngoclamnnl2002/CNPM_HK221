import style from "./style.module.scss"
import Header from "../../components/Header"
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Phone from "@mui/icons-material/Phone";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';



//Prefab for Contacts
function Contacts(urlAvatar,name,lastMessage,time) {
    return (
        <Container>
            <Row className={style.contacts}>
                <Col sm={2}>
                    <div className={style.avatar}></div>
                </Col>
                <Col>
                    <Row className={style.name}>{name}</Row>
                    <Row>
                        <Col className={style.lastMessage}>{lastMessage}</Col>
                        <Col sm={2} className={style.time}>{time}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

//Generate my message
function myMessage(messages=[]) {
    return (
        <Container className={[style.clusterMessage,style.myMessage].join(' ')}>
            <Row>
                <Col sm="auto" className={style.cluster}>
                    {messages.map((message) => (
                        <Row><Col sm="auto" className={style.message}>{message}</Col></Row>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

//Generate contacts message
function contactMessage(urlAvatar,messages=[]) {
    return (
        <Container className={style.clusterMessage}>
            <Row>
                <Col sm="auto" className={style.avatar}></Col>
                <Col sm="auto" className={style.cluster}>
                    {messages.map((message) => (
                        <Row><Col sm="auto" className={style.message}>{message}</Col></Row>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

//Create time line 
function timeLine(time) {
    return (<Row className={style.timeLine}>{time}</Row>)
}

//main message page
const MessagePage = () =>{
    return (
        <div>
            <Header />
            <Container fluid >
                <Row>
                    <div className={style.title}>Chat</div>
                </Row>
                <Row>
                    <Col xl={3} className="border-end border-1 border-dark">
                        <Form.Control 
                            placeholder="Search"
                            className="mb-3"
                        />
                        <Container className={style.listContacts}>
                            {Contacts("aaaaa","Nguyen Thanh Vin","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vinh","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vin","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vinh","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vin","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vinh","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vin","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vinh","aaaaaaaaa","3 gio")}
                            {Contacts("aaaaa","Nguyen Thanh Vin","aaaaaaaaa","3 gio")}
                        </Container>
                    </Col>
                    <Col>
                        <Row className={style.currentContact}>
                            <Col sm={1}>
                                <div className={style.avatar}></div>
                            </Col>
                            <Col sm={5} className={style.name}>Pham Thanh Vinh</Col>
                            <Col className={"d-flex justify-content-end " + style.icon}>
                                <Phone sx={{fontSize:40}}/>
                                <VideoCameraFrontIcon sx={{fontSize:40}}/>
                            </Col>
                        </Row>
                        <Container className={style.mainChat}>
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {timeLine("18:30")}
                            {myMessage(["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaa","aaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaa","aaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaa","aaaaa"])}
                            {timeLine("20:00")}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"])}
                            {contactMessage('aaaa',["aaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])}
                            {myMessage(["aaaaa","aaaaa"])}
                        </Container>
                        <Row className={style.functionBar}>
                            <Col sm={2} className={style.icon}>
                                <AddCircleSharpIcon sx={{fontSize:40}}/>
                                <ImageOutlinedIcon sx={{fontSize:40}}/>
                                <InsertDriveFileIcon sx={{fontSize:40}}/>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Row>
                                        <Col><Form.Control placeholder="Enter message"></Form.Control></Col>
                                        <Col sm={1}><PlayCircleIcon sx={{fontSize:40}} type="submit" className={style.formButton}/></Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MessagePage;