--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title text NOT NULL,
    year integer,
    poster_image_url text,
    director text,
    summary text
);

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.movies (id, title, year, poster_image_url, director, summary) FROM stdin;
1	Parasite	2019	https://img01.mgo-images.com/image/thumbnail/v2/content/MMV6A09291F0983738466001FA262D389816.jpeg	Bong Joon-ho	Members of a poor family who scheme to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals. 
2	Little Women	2019	https://poster.ninja/wp-content/uploads/2019/10/Little-Women-Poster-1-1200x1778.jpg	Greta Gerwig	A coming-of-age (Bildungsroman) story of the four March sisters set during the American Civil War.
3	JoJo Rabbit	2019	https://cdn.shopify.com/s/files/1/0057/3728/3618/products/jojorabbit.11.29_480x.jpg?v=1575064555	Taika Waititi	 A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home. His imaginary friend is Hitler. (Comedy)
4	Thor: Ragnarok	2017	https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg	Taika Waititi	Humor, special effects, etc.
\.


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.movies_id_seq', 4, true);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

