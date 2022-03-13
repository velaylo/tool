<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

// First, let's define our list of routes.
// We could put this in a different file and include it in order to separate
// logic and configuration.

// static routes without logic
$routes = array(
    '/'      => '{"auth":"Truck1 Dev 4","commands":{"list":{"output":"Offers list"},"load":{"input":"Params: offer_id","output":"Offer"},"save":{"input":"Params: name, data, offer_id(optional)","output":"{}"},"delete":{"input":"Params: offer_id","output":"{}"},"stats":{"output":"Truck1 general stats"},"price":{"input":"Params: ads, months, section(tru|agr|frk|spr|att), l","output":"{price:{..}, title:..}"},"/":{"output":"This info"}}}',

    '/stats' => '{"visitors":["3 000 000",3000000],"sellers":["2 500",2500],"versions":["31",31],"years":["18",18]}'
);

// This is our router.
function router($routes) {

    // "list" path
    if ($_SERVER['PATH_INFO'] == '/list') {
        $files = array_diff(scandir('./offers'), array('.', '..'));
        $result = array();
        foreach($files as $file) {
            $file_content = json_decode(file_get_contents('offers/'.$file));

            $list_item = array(
                "offer_id"   => $file_content->offer_id,
                "name"       => $file_content->name,
                "manager_id" => $file_content->manager_id
            );

            array_push( $result, $list_item );
        }

        echo json_encode($result);
        return;
    }

    // "save offer" path
    if ($_SERVER['PATH_INFO'] == '/save') {
        if (!empty($_POST['name']) && !empty($_POST['data'])) {
            $files = array_diff(scandir('./offers'), array('.', '..'));
            $last_file = array_pop($files);
            $last_name = str_replace(".json", "", $last_file);
            $__id = empty($_POST['offer_id']) ? (intval($last_name) + 1) : $_POST['offer_id'];
            $save_name = 'offers/'.$__id.'.json';

            $json = json_encode(array(
                "offer_id" => $__id,
                "manager_id" => 9,
                "name" => $_POST['name'],
                "data" => json_decode($_POST['data'])
            ));

            file_put_contents($save_name, $json);
            echo '{"ok":1}';
        } else {
            echo '{"error":"Save error: check POST parameters."}';
        }
        return;
    } 

    // "load offer" path
    if ($_SERVER['PATH_INFO'] == '/load') {
        if (!empty($_GET['offer_id'])) {
            echo file_get_contents('./offers/'.$_GET['offer_id'].'.json');
        } else {
            echo '{"error":"Error: parameter "offer_id" must be specified."}';
        }
        return;
    }  

    // "get price" path
    if ($_SERVER['PATH_INFO'] == '/price') {
        if (
            empty($_GET['ads']) ||
            empty($_GET['months']) ||
            empty($_GET['section']) ||
            empty($_GET['l'])
        ) {
            echo '{"error":"Check GET parameters. All of them (ads, months, section, l) are required."}';
        } else {
            echo '{"standard":924,"premium":1063,"premium_logo":1903,"gold":1949,"gold_logo1":3564,"gold_logo2":3864,"gold_nologo":1155,"title":"50 ads - 12 months","label_mo":"m.","label_total":"total"}';
        }
        return;
    }

    // Iterate through a given list of routes.
    foreach ($routes as $path => $content) {

        if ($path == $_SERVER['PATH_INFO']) {
            // If the path matches, display its contents and stop the router.
            echo $content;
            return;
        }
    }

    // This can only be reached if none of the routes matched the path.
    echo 'Sorry! Page not found';
}

// Execute the router with our list of routes.
router($routes);

?>