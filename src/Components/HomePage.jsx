
import {Button, Card, Container} from 'react-bootstrap';

function HomePage () {
    return (
        <body className='bg-secondary text-white border border-primary border-3 rounded-top container-fluid'>
            <div>
                <h1>Welcome to Our E-Commerce App</h1>
                <p>This is a store for all things pottery.</p>
                
            </div>
            <Container fluid='lg'>
                <Card className='mt-5 bg-info'> 
                    <Card.Img  variant="top" src="src/Components/east-fork-ceramic-ice-cream.webp"  height={"250rem"} alt='Ice Cream Bowl' />
                    <Card.Body>
                        <Card.Title>Featured Item</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">24/hr Sale</Card.Subtitle>
                        <Card.Text>
                            Get an Ice Cream Bowl for $35. While supplies last.
                        </Card.Text>
                        <Card.Link href="/products"><Button variant="primary" className='shadow-lg'>Shop Now</Button></Card.Link>
                        
                    </Card.Body>
                </Card>
            </Container>
        </body>
        
        
    )
}

export default HomePage;
