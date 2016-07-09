angular.module('pubnub.angular.service', []).provider('PubNub', function() {

    this.init = function(uuid) {
        angular.pubnub = PUBNUB.init({
            publish_key: 'pub-c-3667b777-7a55-40a2-b8ab-4c503795b2c3',
            subscribe_key: 'sub-c-a0aa0d88-2f7c-11e5-8fa4-02ee2ddab7fe',
            origin: 'pubsub.pubnub.com',
            uuid: uuid
        });
    }

    this.$get = function() {
        return PUBNUB;
    }
});
