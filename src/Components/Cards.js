/* size of cards line 14 */
import Card from 'react-bootstrap/Card';
import EditCards from './EditCards';
export default function Cards ({data,setData}){
    return(
        data.map( goal=>
            <Card 
                key={goal.key}
                bg='dark'
                text='white'
                style={{ margin:'2px auto' }}
            >
                <Card.Body>
                    <Card.Title className='display-4'>{goal.title }</Card.Title>
                    <Card.Text className='lead'>
                        {goal.body}
                    </Card.Text>
                    <Card.Text className='lead' >
                        {goal.date.getDate()+ ":" + (goal.date.getMonth()+1)+":" +goal.date.getFullYear()}
                    </Card.Text >
                    <EditCards data={data} setData={setData} goal={goal}/>
                </Card.Body>
            </Card>
        )
    );
}