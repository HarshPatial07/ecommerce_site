
import { useProductContext} from '../context/productcontext';
function About() {
  const {myName} = useProductContext();
  return (
    <div>
      {myName}    
    </div>
  )
}

export default About