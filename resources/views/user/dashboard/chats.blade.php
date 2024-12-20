@extends('user.dashboard.layouts')
@section('user_title_content')
    Ahknoxo | Tools
@endsection
@section('user_css_content')
	<style type="text/css" media="screen">
		@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');

		.chatbox-holder {
		  position: sticky;
		 
		}

		.chatbox {
		  width: 500px;
		  height: 400px;
		  margin: 0 20px 0 0;
		  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);
		  display: flex;
		  flex-flow: column;
		  border-radius: 10px 10px 0 0;
		  background: white;
		  bottom: 0;
		  transition: .1s ease-out;
		}
		/*Responsive mobile devices*/
		@media (min-width: 300px) and (max-width: 1024px) {
		    .chatbox {
			  width: 300px;
			  height: 400px;
			  margin: 0 20px 0 0;
			  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);
			  display: flex;
			  flex-flow: column;
			  border-radius: 10px 10px 0 0;
			  background: white;
			  bottom: 0;
			  transition: .1s ease-out;
			}
		}
		.chatbox-top {
		  position: relative;
		  display: flex;
		  padding: 10px 0;
		  border-radius: 10px 10px 0 0;
		  background: rgba(0, 0, 0, .05);
		}

		.chatbox-icons {
		  padding: 0 10px 0 0;
		  display: flex;
		  position: relative;
		}

		.chatbox-icons .fa {
		  background: rgba(220, 0, 0, .6);
		  padding: 3px 5px;
		  margin: 0 0 0 3px;
		  color: white;
		  border-radius: 0 5px 0 5px;
		  transition: 0.3s;
		}

		.chatbox-icons .fa:hover {
		  border-radius: 5px 0 5px 0;
		  background: rgba(220, 0, 0, 1);
		}

		.chatbox-icons a, .chatbox-icons a:link, .chatbox-icons a:visited {
		  color: white;
		}

		.chat-partner-name, .chat-group-name {
		  flex: 1;
		  padding: 0 0 0 95px;
		  font-size: 15px;
		  font-weight: bold;
		  color: #30649c;
		  text-shadow: 1px 1px 0 white;
		  transition: .1s ease-out;
		}

		.status {
		  width: 12px;
		  height: 12px;
		  border-radius: 50%;
		  display: inline-block;
		  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);
		  border: 1px solid rgba(0, 0, 0, 0.15);
		  background: #cacaca;
		  margin: 0 3px 0 0;
		}

		.online {
		  background: #b7fb00;
		}

		.away {
		  background: #ffae00;
		}

		.donot-disturb {
		  background: #ff4343;
		}

		

		.chat-messages {
		  border-top: 1px solid rgba(0, 0, 0, .05);
		  padding: 10px;
		  overflow: auto;
		  display: flex;
		  flex-flow: row wrap;
		  align-content: flex-start;
		  flex: 1;
		}

		.message-box-holder {
		  width: 100%;
		  margin: 0 0 15px;
		  display: flex;
		  flex-flow: column;
		  align-items: flex-end;
		}

		.message-sender {
		  font-size: 12px;
		  margin: 0 0 15px;
		  color: #30649c;
		  align-self: flex-start;
		}

		.message-sender a, .message-sender a:link, .message-sender a:visited, .chat-partner-name a, .chat-partner-name a:link, .chat-partner-name a:visited {
		  color: #30649c;
		  text-decoration: none;
		}

		.message-box {
		  padding: 6px 10px;
		  border-radius: 6px 0 6px 0;
		  position: relative;
		  background: rgba(100, 170, 0, .1);
		  border: 2px solid rgba(100, 170, 0, .1);
		  color: #6c6c6c;
		  font-size: 12px;
		}

		.message-box:after {
		  content: "";
		  position: absolute;
		  border: 10px solid transparent;
		  border-top: 10px solid rgba(100, 170, 0, .2);
		  border-right: none;
		  bottom: -22px;
		  right: 10px;
		}

		.message-partner {
		  background: rgba(0, 114, 135, .1);
		  border: 2px solid rgba(0, 114, 135, .1);
		  align-self: flex-start;
		}

		.message-partner:after {
		  right: auto;
		  bottom: auto;
		  top: -22px;
		  left: 9px;
		  border: 10px solid transparent;
		  border-bottom: 10px solid rgba(0, 114, 135, .2);
		  border-left: none;
		}

		.chat-input-holder {
		  display: flex;
		  border-top: 1px solid rgba(0, 0, 0, .1);
		}

		.form .chat-input {
			width: 100%;
		  resize: none;
		  padding: 5px 10px;
		  height: 40px;
		  font-family: 'Lato', sans-serif;
			font-size: 14px;
		  color: #999999;
		  flex: 1;
		  border: none;
		  background: rgba(0, 0, 0, .05);
		   border-bottom: 1px solid rgba(0, 0, 0, .05);
		}

		.form .chat-input:focus, .message-send:focus {
		  outline: none;
		}

		.form .message-send::-moz-focus-inner {
			border:0;
			padding:0;
		}

		.form .message-send {
			width:100%;
		  -webkit-appearance: none;
		  background: #9cc900;
		  background: -moz-linear-gradient(180deg, #00d8ff, #00b5d6);
		  background: -webkit-linear-gradient(180deg, #00d8ff, #00b5d6);
		  background: -o-linear-gradient(180deg, #00d8ff, #00b5d6);
		  background: -ms-linear-gradient(180deg, #00d8ff, #00b5d6);
		  background: linear-gradient(180deg, #00d8ff, #00b5d6);
		  color: white;
		  font-size: 12px;
		  padding: 0 15px;
		  border: none;
		  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
		}

		
	</style>
@endsection

@section('dashboard_main_content')
	<div class="row row_section">
        <div class="chatbox-holder">
			<div class="chatbox">
			    <div class="chatbox-top">
			      
			      <div class="chat-partner-name">
			        <a target="_blank" href="javascript::void(0)">Admin</a>
			      </div>
			           
			    </div>
			    
			    <div class="chat-messages">
			    	@foreach($messages as $message)
				       	<div class="message-box-holder">
			    		
					        <div class="message-box {{ ($message->receiver_type == 'mlmuser') ?  'message-partner' : ''}}">
					          	{{$message->message}}
					        </div>
				      	</div>
			    	@endforeach  
			    </div>
			    
			    <div class="card-footer">
			    	<form action="{{route('chats.store')}}" method="post" class="form" style="display: flex;">
		                @csrf
		                <input class="form-control col-sm-8" name="message" required>
	                      
				      	<input type="submit" value="Send" class="message-send" />
	                </form>
			    </div>
			</div>
	  
		</div>
   
    </div>
@endsection
@section('user_js_content')
	<script type="text/javascript">
	

	</script>
@endsection