<%--
  Created by IntelliJ IDEA.
  User: nicholassosa
  Date: 2019-08-21
  Time: 15:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        #displayGames {
            height:500px;
            width:100%;
            margin-top: 20px;
            text-align:justify;
        }
        .gameImg {
            height: auto;
            width: 275px;
        }
    </style>
</head>
<body>
<div>
    <input id="gameSearch" type="text" placeholder="Search for a video game">
    <button id="searchGames">Search</button>
</div>

<div class="container">
    <div class="row" id="displayGames"></div>
</div>

<!-- Modal -->
<div class="modal fade" id="gameModal" tabindex="-1" role="dialog" aria-labelledby="gameModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="gameModalTitle"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div id="modal-body" class="modal-body"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">Save and Close</button>
            </div>
        </div>
    </div>
</div>

<%@include file="partials/test_scripts.jsp"%>
<%@include file="partials/bootstrap_scripts.jsp"%>
</body>
</html>
