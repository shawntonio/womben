import React from 'react';

const Home = (props) => {
	return (
		<div className='home'>
			<section>
				<img src="http://prairiehive.com/wp-content/uploads/2016/10/healthy-women.jpg" alt="women"/>
				<div className='stay-connected'>
					Stay connected + receive a free PDF : <input className='home-email-input' type="text" placeholder='email' />
				</div>
				<hr/>
			</section>

			<section className='promotions'>
				<div>
					<img src="https://cdn-img.health.com/sites/default/files/styles/large_16_9/public/1529425696/slack-imgs.jpg?itok=6v_SlnWn&1529430097" alt="vaginal steaming"/>
					<h2>Steaming</h2>
				</div>

				<div>
					<img src="https://eatbreatheselflove.files.wordpress.com/2018/05/img_9312.jpg?w=1920&h=1080&crop=1" alt="Self Love"/>
					<h2>Virtual Courses</h2>
				</div>

				<div>
					<img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_414,q_75,w_470/v1/clients/olympia/Events_Calendar_5d7a0ee1-0e47-4472-a2cb-88d2c4409d64.jpg" alt="events"/>
					<h2>Events</h2>
				</div>
			</section>
			<hr/>
			<section className="inspiring-quote">
				"Tend to your heart and womb and you will heal and reclaim your fullest potential"
			</section>
			<hr/>
			<section className='welcome'>
				<img src="https://scontent-sjc3-1.cdninstagram.com/vp/025ad10dcfa3e889a9115df705502b02/5D5F59F0/t51.2885-19/s320x320/54191314_323028085237434_3490513436058583040_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com" alt="Jaz"/>
				<div>
					<h2>Welcome to womben & co</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque consequuntur deserunt cum modi aliquam totam aut temporibus quaerat ducimus voluptates eum, odit, distinctio, laudantium illo fuga necessitatibus sunt. Autem.</p>
				</div>
			</section>
			<hr/>
			<section className="join">

			</section>
		</div>
	)
}

export default Home