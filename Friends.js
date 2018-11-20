// Friends.js

handlers.RequestFriend = function(args, context){
	// 1. Add requestee as friend for the requester
	// 2. Add requester as friend for the requestee
	// 3. Set friend tags requester
	// 4. Set friend tags requestee
	// 5. Push notifcation to requestee

	var requesterPlayFabId = currentPlayerId; // D901A83E7F6E0426
	var requesteePlayFabId = "6EE1466F0A7DD431";

	// 1 & 3
	AddFriendWithTag(requesterPlayFabId, requesteePlayFabId, "Awaiting");
	// 2 & 4
	AddFriendWithTag(requesteePlayFabId, requesterPlayFabId, "Pending");
	
	// Push notification to the requested
}

handlers.RemoveFriend = function(args, context) {
	// Remove friends for the requester and the requested
	//var removeFriendResult = server.RemoveFriend(
}

function AddFriendWithTag(requesterPlayFabId, requesteePlayFabId, tag) {
	// Add friend
	var addFriendRequest = {
		PlayFabId: requesterPlayFabId,
		FriendPlayFabId: requesteePlayFabId
    };
	var addFriendRequestResult = server.AddFriend(addFriendRequest);
	// Check for error
	
	// Set friend tag
	var setFriendTagsRequest = {
		PlayFabId: requesterPlayFabId,
		FriendPlayFabId: requesteePlayFabId,
		Tags: [tag]
	};
	var setFriendTagResult = server.SetFriendTags(setFriendTagsRequest);
	// Check for error
}