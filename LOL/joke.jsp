<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
	<link rel="stylesheet/less" type="text/css" href="css/joke.less" />
	
	<script type="text/javascript" src="js/jquery-1.12.0.js"></script>
 	<script type="text/javascript" src="js/materialize.js"></script>
 	<script type="text/javascript" src="js/less.min.js"></script>
    <script type="text/javascript" src="js/joke.js"></script></head>
  
  <body>
    <div class="rift">
    	<a class="Theshy modal-trigger" href="#modalmsg">
    		<img src="images/theshy.png" alt="theshy" />
    	</a>
    </div>
   <div id="modalmsg" class="modal">
    <div class="modal-content">
      <h4>The Shy领域</h4>
      <p>传说中的LPL上单Boss——The Shy在此出没，强行收过路费无数</p>
      <img class="contentimg" src="images/theshycontent.jpg" alt="theshycontent.jpg" />
    </div>
    <div class="modal-footer">
      <a class="btn-floating waves-effect waves-light red"><i class="material-icons">movie</i></a>
    </div>
  </div>
  </body>
</html>
