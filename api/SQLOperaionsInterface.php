<?php

/**
 * This interface contains the functions to be implemented in SQLOperations class
 * @author ibrahimradwan
 */
interface SQLOperationsInterface {

    // =========================================================================================================
    //                                          USERS FUNCTIONS
    // =========================================================================================================

    function signUpUser($email, $pass1, $pass2, $role, $name, $tel, $extraData);

    function login($emial, $pass);

    function editAccount($userID, $userType, $userNewData);

    function getUsersUsingType($userType);

    function deleteUser($userID);

    function addEmployee($data);

    function changeUserStatus($userID, $newStatus);

    function addProductToCart($productId, $userID);

    function removeProductFromCart($productID, $userID);

    function decreaseProductFromCart($productID, $userID);

    function getCartProducts($userID);

    public function getAllOrders($selectionCols, $appliedFilters, $userID = "");

    public function getOrder($id, $selectionCols);

    public function addOrder($buyerId);

    public function deleteOrder($id, $userID);

    public function updateOrder($id, $status);

    public function getOrderItems($orderID, $buyerID);

    public function getDeliveryRequests($deliveryManID);

    public function addCategory($name);

    public function deleteCategory($id);

    public function selectCategory($id);

    public function updateCategory($id, $name);

    public function getAllCategories();

    public function updateRate($buyerId, $productId, $increase);

    public function addCategorySpec($categoryId, $name);

    public function updateCategorySpec($id, $categoryId, $name);

    public function deleteCategorySpec($id);

    public function getCategorySpec($id);

    public function getAllProducts($cateID = -1, $sellerID = -1, $isAdmin = false);

    public function updateProductSpec($id, $newSpecValue);

    public function addProductSpec($productId, $specs);

    public function getProductSpec($productId);

    public function addProduct($name, $price, $size, $weight, $available_quantity, $origin, $provider, $image, $seller_id, $category_id, $specs, $description);

    public function updateProduct($id, $name, $price, $size, $weight, $availability_id, $available_quantity, $origin, $provider, $image, $seller_id, $desc, $more);

    public function deleteProduct($productId, $isAdmin = false, $sellerID = -1);

    public function getProductByKey($key);

    public function getTop3In4Cat();
}
