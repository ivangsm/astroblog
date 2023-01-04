---
publishDate: 'May 14 2021'
title: 'Web Scrapping with Elixir'
description: 'Elixir is a functional programming language that can be used to extract data from an HTML document or web page through web scrapping. This tutorial will guide you through the process of using the HTTPoison and Floki libraries to make an HTTP request and parse the HTML data, respectively, in order to obtain and return specific information from the web page.'
image: '~/assets/images/elixir2.png'
category: 'Tutorials'
tags: [elixir, web scrapping]
---

#### ❓ What is web scrapping?


The web scrapping allow us to convert an HTML document or structure into usable data in our programs.

In this small project, we will obtain information about the daily currency exchange rates from a table updated by the bank of Europe. [Link](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

This table contains the information about symbols, currency names and the exchange rate based on Euro.

We will use 2 libraries for our elixir program

- **HTTPoison** (_to make HTTP requests_)
- **Floki** (_to transform HTML into usable data_)

We need to create an Elixir project with Mix, in this case I use "**Curry**" as the name for the solution.

```bash
mix new curry && cd curry
```

In the folder, we need to add the dependencies on the file named **mix.exs**

```elixir
defp deps do
    [
        {:httpoison, "~> 1.8"},
        {:floki, "~> 0.30.1"}
    ]
 end
```

If you use **VS Code** as editor together with the **Elixir LS** extension, these dependencies should be installed automatically after saving the file. Otherwise, you have to run the following command in the terminal inside the project directory to get the dependencies.

```bash
mix deps.get
```

In the curry.ex file (depending on the name of your project) inside the lib directory, we must create a function inside the Curry module (or the name you choose)

```elixir
@url "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"

def get_currencies do
    case HTTPoison.get(@url) do
      {:ok, response} ->
        {:ok, html} = Floki.parse_document(response.body)

        content =
          html
          |> Floki.find("td")
          |> Floki.find("a")
          |> Floki.text(sep: "|")
          |> String.split("|")
          |> Enum.chunk_every(3)
          |> Enum.map(fn [a, b, c] -> %{symbol: a, name: b, rate: c} end)

        {:ok, content}
      {:error, error} ->
        IO.inspect error.reason
    end
  end
```

### Now let us explain what is happened step by step

#### 🔗 Declaring the URL

Assign the **URL** from which we need to obtain information to the ***URL*** constant

```elixir
@url "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
```

#### 🌐 Use response in a case

Create a case structure to manage patterns of responses returned by the ***get*** function from the **HTTPoison** module.

```elixir
case HTTPoison.get(@url) do
...
end
```

#### 🌚 Declare the needed pattern as an option

This function **_HTTPoison.get(url)_** return a tuple with an atom and a map, in this case we only need the body, and we can get only this from the entire response using pattern matching

These options allow us to save all the body from the response in a body variable only if the request was successful

```elixir
{:ok, response} ->
```
#### 🌝 Transform body data into Floki structure

Now the HTML structure of the body is saved on the body variable, and now we need to parse this data with the ***parse_document*** function from the Floki module.

Again, we need to use pattern matching to save our transformed data into the HTML var, that converts the HTML document into a series of list and tuples 

```elixir
{:ok, html} = Floki.parse_document(response.body)
```

#### 🔮 Now, the magic!

With this data, we can now start to filter and transform the data with another Floki functions.


```elixir
content =
    html
    |> Floki.find("td") # Search for all td elements into html data
    |> Floki.find("a") # Search for all a elements into all td elements finded previously
    |> Floki.text(sep: "|") # Get only the text in the a elements and add | character as separator between all occurrences.
    |> String.split("|") # Transform the entire text into list using and deleting the separator character from previous function.
    |> Enum.chunk_every(3) # Our rows contains 3 data fields (symbol, name, rate) so split the list into sublists of 3 elements
    |> Enum.map(fn [a, b, c] -> %{symbol: a, name: b, rate: c} end)  # Transform the list of lists into a list of maps.

{:ok, content} # Return a tuple with the atom :ok and the list of maps
```

#### 📄 Example of successful response

```elixir
{:ok,
 [
   %{name: "US dollar", rate: "1.2081", symbol: "USD"},
   %{name: "Japanese yen", rate: "132.37", symbol: "JPY"},
   %{name: "Bulgarian lev", rate: "1.9558", symbol: "BGN"},
   %{name: "Czech koruna", rate: "25.575", symbol: "CZK"},
   %{name: "Danish krone", rate: "7.4365", symbol: "DKK"},
   %{name: "Pound sterling", rate: "0.86063", symbol: "GBP"},
   %{name: "Hungarian forint", rate: "357.13", symbol: "HUF"},
   %{name: "Polish zloty", rate: "4.5467", symbol: "PLN"},
   %{name: "Romanian leu", rate: "4.9273", symbol: "RON"},
   %{name: "Swedish krona", rate: "10.1720", symbol: "SEK"},
   %{name: "Swiss franc", rate: "1.0960", symbol: "CHF"},
   %{name: "Icelandic krona", rate: "150.50", symbol: "ISK"},
   %{name: "Norwegian krone", rate: "10.1270", symbol: "NOK"},
   %{name: "Croatian kuna", rate: "7.5275", symbol: "HRK"},
   %{name: "Russian rouble", rate: "89.7244", symbol: "RUB"},
   %{name: "Turkish lira", rate: "10.2653", symbol: "TRY"},
   %{name: "Australian dollar", rate: "1.5673", symbol: "AUD"},
   %{name: "Brazilian real", rate: "6.4027", symbol: "BRL"},
   %{name: "Canadian dollar", rate: "1.4665", symbol: "CAD"},
   %{name: "Chinese yuan renminbi", rate: "7.7969", symbol: "CNY"},
   %{name: "Hong Kong dollar", rate: "9.3841", symbol: "HKD"},
   %{name: "Indonesian rupiah", rate: "17317.81", symbol: "IDR"},
   %{name: "Israeli shekel", rate: "3.9774", symbol: "ILS"},
   %{name: "Indian rupee", rate: "88.8595", symbol: "INR"},
   %{name: "South Korean won", rate: "1368.03", symbol: "KRW"},
   %{name: "Mexican peso", rate: "24.3353", symbol: "MXN"},
   %{name: "Malaysian ringgit", rate: "4.9835", symbol: "MYR"},
   %{name: "New Zealand dollar", rate: "1.6885", symbol: "NZD"}, 
   %{name: "Philippine peso", rate: "57.903", symbol: "PHP"},
   %{name: "Singapore dollar", rate: "1.6120", symbol: "SGD"},
   %{name: "Thai baht", rate: "37.874", symbol: "THB"},
   %{name: "South African rand", rate: "17.1055", symbol: "ZAR"}
 ]}
```

Now with this, you be able to use this data to interpolate the exchange rate based in any of these currencies and not only the Euro. Or get specific data, save to a db etc. But we make this in another post.

If you have any questions or suggestions I will be happy to read them, you can email me to [me@ivansalazar.dev](mailto:me@ivansalazar.dev)
