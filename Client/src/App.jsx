import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";
import ManageListing from "./pages/ManageListing";
import MyOrders from "./pages/MyOrders";
import Loading from "./pages/Loading";
import Marketplace from "./pages/Marketplace";
import MyListing from "./pages/MyListing";
import Messages from "./pages/Messages";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/my-listings" element={<MyListing />} />
        <Route path="/listing/:listingId" element={<ListingDetails />} />
        <Route path="/create-listing" element={<ManageListing />} />
        <Route path="/edit-listing/:id" element={<ManageListing />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
};
