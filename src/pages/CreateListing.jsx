import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: "1",
    bathrooms: "1",
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: "0",
    discountedPrice: "0",
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-6">Create Listing</h1>
      <form>
        <p className="text-lg font-semibold mt-6">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onclick={onChange}
            className={`mr-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onclick={onChange}
            className={`ml-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="font-semibold text-lg mt-6">Name</p>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="FullName"
          maxLength="32"
          minLength="10"
          required
          className="w-full text-xl px-4 py-2 text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              name="bedrooms"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              required
              min="1"
              max="50"
              className="text-xl px-4 py-2 text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gay-700 focus:bg-white focus:border-slate-600 rounded text-center w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              name="bathrooms"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              required
              min="1"
              max="50"
              className="text-xl px-4 py-2 text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gay-700 focus:bg-white focus:border-slate-600 rounded text-center w-full"
            />
          </div>
        </div>
        <p className="text-lg font-semibold mt-6">Parking Spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onclick={onChange}
            className={`mr-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onclick={onChange}
            className={`ml-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        <p className="text-lg font-semibold mt-6">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onclick={onChange}
            className={`mr-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onclick={onChange}
            className={`ml-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        <p className="font-semibold text-lg mt-6">Address</p>
        <textarea
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full text-xl px-4 py-2 text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="font-semibold text-lg">Description</p>
        <textarea
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full text-xl px-4 py-2 text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onclick={onChange}
            className={`mr-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onclick={onChange}
            className={`ml-3 px-1 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div class="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex justify-center items-center space-x-6 w-full mb-6">
              <input
                type="number"
                name="regularPrice"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600 focus:text-gray-700 text-center "
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div class="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex justify-center items-center space-x-6 w-full mb-6">
                <input
                  type="number"
                  name="discountedPrice"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600 focus:text-gray-700 text-center "
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">This images will be cover (max 6)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-300"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Creating Listing
        </button>
      </form>
    </main>
  );
}
