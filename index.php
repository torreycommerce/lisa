<?php

$entryPoint = dirname(__FILE__);
$corePath = '../../app';

if (isset($_SERVER['ACENDA_CORE_PATH'])) $corePath = $_SERVER['ACENDA_CORE_PATH'];
$coreStart = $corePath . '/index.php';

if (!file_exists($coreStart)) die('can not locate acenda core.');
else include ($coreStart);
