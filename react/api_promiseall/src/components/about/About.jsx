import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function About() {

  const [posts, setPosts] = useState([])

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)


  useEffect(() => {
    const fetchDatas = async () => {
      const [promisePosts, promiseComments, promiseAuthors] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()),
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      ]);
      const PostWithAuthorAndComments = promisePosts.map(post => {
        const author = promiseAuthors.find(author => author.id === post.userId)
        const comments = promiseComments.filter(comment => comment.postId === post.id)
        return { ...post, author, comments }
      })
      setPosts(PostWithAuthorAndComments)
    }
    fetchDatas();
  
    const openModal = async () => {
      const buttons = document.getElementsByTagName('Button')
      Array.from(buttons).forEach(button => {
       button.addEventListener('click', () =>{
        const postID = parseInt(button.id)
        const post = posts.find(post => post.id === postID)
        if(post){
          setShow(true)
          setModalContent(post)
        }
       })
      });
    }
    openModal()
  }, [posts])

  const [modalContent,setModalContent] = useState({})


  return (
  <>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author Name</th>
        <th>More</th>
      </tr>
    </thead>
    <tbody>
    {posts.map(post =>
      <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.author ? post.author.name : ''}</td>
          <td><Button id={post.id} variable='primary'>+</Button></td>
      </tr>
      )}
    </tbody>
  </Table>

    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='d-flex justify-content-between'>
            <div className="col-md-9">{modalContent.title}</div>
            <div className="col-md-2 small fs-6">{modalContent.author ? modalContent.author.name : ''}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row fs-3 mx-auto">
          {modalContent.body}
          <hr />
            <h4>Comments:</h4>
            {modalContent.comments && modalContent.comments.map(comment => (
              <div key={comment.id}>
                <li><i>{comment.name}</i>: {comment.body}</li>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default About