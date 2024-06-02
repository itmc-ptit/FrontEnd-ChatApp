import { Alert, Image } from 'react-bootstrap'

export default function ChatBox(props) {
    const { photo, name, content, UpdateAt } = props
    // console.log({ photo, name, content })
    return (
        <>
            <Alert key={'light'} variant={'light'} style={{ margin: '2px', color: 'black' }}>
                <div className="mb-0">
                    <Image src={photo} style={{ width: '30px', height: 'auto' }} roundedCircle />
                    {' ' + name}
                    <hr style={{ marginTop: '6px', marginRight: '0px' }} /> <p>{content}</p>
                    <p style={{ fontSize: '15px', color: 'gray' }}>{UpdateAt}</p>
                </div>
            </Alert>
        </>
    )
}