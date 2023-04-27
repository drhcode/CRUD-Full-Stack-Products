<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductsCollection;
use App\Http\Requests\UpdateProductRequest;

class ProductsController extends Controller
{
    public function index()
    {
        return new ProductsCollection(Product::all());
    }
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return $product;
    }
    public function store(StoreProductRequest $request)
    {
        Product::create($request->validated());
        return response()->json('Product Stored Successfully');
    }
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return response()->json('Product Updated Successfully');
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $result = $product->delete();
        if ($result) {
            return response()->json('Product deleted Successfully');
        }
    }
}
