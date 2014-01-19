<?php

class Login
{
    function _construct()
    {
        session_start();
    }

    function loginUser()
    {
        $arr = array('status' => 2, 'message' => 'User successfully logged in.');
        $_SESSION['user'] = 1;
        echo json_encode($arr);
    }

    function logoutUser()
    {
        $arr = array('status' => 3, 'message' => 'User successfully logged out.');
        unset($_SESSION['user']);
        echo json_encode($arr);
    }

    function checkSession()
    {
        if (isset($_SESSION['user']) && $_SESSION['user'] === 1) {
            $arr = array('status' => 1, 'message' => 'User session exists.');
        } else {
            $arr = array('status' => 0, 'message' => 'User session expired.');
        }
        echo json_encode($arr);
    }
}

$login = new Login();
if ($_REQUEST['method'] === 'login') {
    $login->loginUser();
} else if ($_REQUEST['method'] === 'logout') {
    $login->logoutUser();
} else {
    $login->checkSession();
}
?>
