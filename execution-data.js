"use strict";

var executionDataCSV = `01/10/1986,James Roach,25,m,White,1 White Male(s)1 White Female(s),SC,S,Electrocution,Yes,No,No,No,Richland
01/11/1985,Joseph Shaw,29,m,White,1 White Male(s)1 White Female(s),SC,S,Electrocution,No,No,No,No,Richland
01/08/1997,Paul Ruiz,49,m,Latino,2 White Male(s),AR,S,Lethal Injection,No,No,No,No,Logan
01/08/1997,Earl Van Denton,47,m,White,2 White Male(s),AR,S,Lethal Injection,No,No,No,No,Nevada
01/06/1994,Keith Wells,31,m,White,1 White Male(s)1 White Female(s),ID,W,Lethal Injection,No,No,Yes,No,Ada
01/10/2000,Douglas Thomas,26,m,White,2 White Male(s),VA,S,Lethal Injection,Yes,No,No,No,Middlesex
01/12/2000,Earl Heiselbertz,48,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Sabine
01/05/1993,Westley Dodd,31,m,White,3 White Male(s),WA,W,Hanging,No,No,Yes,No,Clark
01/04/1985,David Martin,32,m,White,2 White Male(s)2 White Female(s),LA,S,Electrocution,No,No,No,No,Lafourche Parish
01/09/2002,James Johnson,52,m,White,2 White Male(s)2 White Female(s),MO,M,Lethal Injection,No,No,No,No,Moniteau
01/08/1999,Ronnie Howard,40,m,Black,1 Asian Male(s),SC,S,Lethal Injection,No,No,No,No,Greenville
01/09/2001,Eddie Trice,48,m,Black,1 Black Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/11/2001,Wanda Allen,41,f,Black,1 Black Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/09/2001,Jack Clark,37,m,White,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
01/09/1985,Roosevelt Green,28,m,Black,1 White Female(s),GA,S,Electrocution,No,No,No,No,Brooks
01/07/1988,Robert Streetman,27,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Hardin
01/06/1989,George Mercer,44,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Cass
01/04/1995,Jesse Jacobs,44,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
01/04/1996,Walter Correll,34,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Franklin
01/08/1997,Kirt Wainwright,30,m,Black,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Logan
01/10/1997,Billy Waldrop,44,m,White,1 White Male(s),AL,S,Electrocution,No,No,No,No,Talladega
01/05/1999,John Moody,46,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Taylor
01/07/1999,John Castro,37,m,Native American,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Kay
01/08/1999,Dobie Williams,38,m,Black,1 White Female(s),LA,S,Lethal Injection,No,No,No,No,Sabine Parish
01/06/2000,Malcolm Johnson,41,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/07/2000,David Duren,37,m,White,1 White Female(s),AL,S,Electrocution,No,No,No,No,Jefferson
01/11/2001,Robert Glock,39,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Manatee
01/09/2002,Michael Moore,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Coryell
02/09/1999,Jaturun Siripongs,43,m,Asian,1 Asian Male(s)1 Asian Female(s),CA,W,Lethal Injection,No,No,No,Yes,Orange
02/09/1998,Steven Renfro,40,m,White,1 White Male(s)2 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Harrison
02/04/1999,Sean Sellers,29,m,White,2 White Male(s)1 White Female(s),OK,S,Lethal Injection,Yes,No,No,No,Oklahoma
02/02/1994,Harold Barnard,51,m,White,1 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Galveston
02/10/2000,Michael Roberts,41,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
02/06/2002,Michael Owsley,40,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,Jackson
02/07/1995,Jeffrey Motley,29,m,White,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/10/1999,George Cordova,39,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
02/08/2001,Adolph Hernandez,50,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
02/04/2003,John Elliott,42,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,Yes,Travis
02/06/2003,Henry Dunn,28,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Smith
02/11/1992,Johnny Garrett,28,m,White,1 White Female(s),TX,S,Lethal Injection,Yes,No,No,No,Potter
02/09/1996,Leo Jenkins,38,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
02/06/1997,Michael George,39,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Prince William
02/10/1997,Richard Brimage,41,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Kleberg
02/03/1998,Karla Tucker,38,f,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/10/1998,Tony Mackall,33,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Prince William
02/03/1999,Darrick Gerlaugh,38,m,Native American,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
02/04/1999,Tony Fry,23,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Chesterfield
02/11/1999,Danny Barber,43,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
02/01/2001,D.L. Jones,61,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Comanche
02/07/2001,Stanley Lingar,37,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Francois
02/05/2003,Kenneth Kenley,42,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Butler
02/12/2003,Richard Fox,47,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Wood
03/03/1999,Walter LaGrand,37,m,White,1 White Male(s),AZ,W,Gas Chamber,No,No,No,Yes,Pima
03/07/2002,Gerald Tigner,29,m,Black,2 Black Male(s),TX,S,Lethal Injection,No,No,No,No,McLennan
03/03/2000,Freddie Wright,48,m,Black,1 White Male(s)1 White Female(s),AL,S,Electrocution,No,No,No,No,Mobile
03/09/1981,Steven Judy,24,m,White,2 White Male(s)2 White Female(s),IN,M,Electrocution,No,No,Yes,No,Marion
03/10/1992,Robyn Parks,37,m,Black,1 Asian Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
03/06/1998,John Arnold,43,m,White,1 Black Female(s),SC,S,Lethal Injection,No,No,No,No,Beaufort
03/01/2000,Odell Barnes,31,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
03/09/2001,Willie Fisher,39,m,Black,1 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Forsyth
03/06/1985,Johnny Witt,41,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Volusia
03/12/1986,Charles Bass,29,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/04/1987,Elisio Moreno,27,m,Latino,1 White,TX,S,Lethal Injection,No,No,Yes,No,El Paso
03/03/1992,Edward Ellis,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/03/1993,John Brewer,27,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,Yes,No,Coconino
03/03/1993,James Red Dog,39,m,Native American,1 White Male(s),DE,S,Lethal Injection,No,No,Yes,No,New Castle
03/05/1993,Robert Sawyer,41,m,White,1 White Female(s),LA,S,Lethal Injection,No,No,No,No,Jefferson Parish
03/03/1994,Johnny Watkins,32,m,Black,1 White Female(s),VA,S,Electrocution,No,No,No,No,Danville City
03/01/1996,Antonio James,42,m,Black,1 White Male(s),LA,S,Lethal Injection,No,No,No,No,Orleans Parish
03/12/1997,John Barefield,32,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/11/1998,Jerry Hogue,47,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
03/09/1999,George Quesinberry,37,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Chesterfield
03/10/1999,Roy Roberts,46,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Marion
03/01/2001,Thomas Akers,31,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,Yes,No,Franklin
03/01/2001,Robert Clayton,40,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
03/07/2001,Dennis Dowthitt,55,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
03/06/2002,Jeffrey Tokar,37,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Warren
03/12/2002,Tracy Housel,43,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Gwinnett
03/11/2003,Bobby Cook,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Anderson
04/05/1984,Elmo Sonnier,35,m,White,1 White Male(s)1 White Female(s),LA,S,Electrocution,No,No,No,No,Iberia Parish
04/06/1992,Donald Harding,43,m,White,2 White Male(s),AZ,W,Gas Chamber,No,No,No,No,Pima
04/03/1997,David Spence,40,m,White,1 White Male(s)2 White Female(s),TX,S,Lethal Injection,No,No,No,No,McLennan
04/05/1999,Alvaro Calambro,25,m,Asian,1 White Male(s)1 White Female(s),NV,W,Lethal Injection,No,No,Yes,Yes,Washoe
04/03/2001,Jason Massey,27,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Ellis
04/02/2002,Daniel Zirkle,33,m,White,2 White Female(s),VA,S,Lethal Injection,No,No,Yes,No,Page
04/03/2003,Scott Hain,32,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,Yes,No,No,No,Creek
04/10/2002,Jose santellan,40,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Kerr
04/05/1984,Arthur Goode,30,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Lee
04/04/1994,Richard Beavers,38,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
04/06/1995,Noble Mays,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Wilbarger
04/07/1995,Nicholas Ingram,31,m,White,1 White Male(s),GA,S,Electrocution,No,No,No,Yes,Cobb
04/10/1996,Doyle Williams,48,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Clay
04/02/1997,David Herman,39,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
04/12/1999,Marion Pruett,49,m,White,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Crawford
04/10/2002,Paul Kreutzer,30,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Callaway
04/11/2002,Wlliam Burns,43,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bowie
04/08/2003,Don Hawkins,43,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
04/09/2003,Earl Bramblett,61,m,White,1 White Male(s)3 White Female(s),VA,S,Electrocution,No,No,No,No,Roanoke
05/10/1994,John Gacy,52,m,White,12 White Male(s),IL,M,Lethal Injection,No,No,No,No,Cook
05/04/1990,Jesse Tafero,43,m,White,2 White Male(s),FL,S,Electrocution,No,No,No,No,Bradford
05/02/2000,Christina Riggs,28,f,White,1 White Male(s)1 White Female(s),AR,S,Lethal Injection,No,No,Yes,No,Pulaski
05/11/2000,Michael McBride,38,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
05/02/2003,Kevin Hough,43,m,White,2 White Male(s),IN,M,Lethal Injection,No,No,No,No,Allen
05/02/1997,Walter Hill,62,m,Black,2 Black Male(s)1 Black Female(s),AL,S,Electrocution,No,No,No,No,Jefferson
05/03/1996,Keith Williams,48,m,White,2 Latino Male(s)1 Latino Female(s),CA,W,Lethal Injection,No,No,No,No,Merced
05/08/2001,Clay Smith,30,m,White,1 White Male(s)4 White Female(s),AR,S,Lethal Injection,No,No,Yes,No,Jefferson
05/06/2003,Carl Isaacs,49,m,White,5 White Male(s)1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Seminole
05/03/1994,Paul Rougeau,46,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/11/1994,Edward Pickens,39,m,Black,1 Black Male(s),AR,S,Lethal Injection,No,No,No,No,Montgomery
05/03/1995,Emmitt Foster,42,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
05/12/1995,Varnell Weeks,43,m,Black,1 Black Male(s),AL,S,Electrocution,No,No,No,No,Macon County
05/05/1999,Clydell Coleman,62,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,McLennan
05/03/2002,Richard Johnson,39,m,White,1 Black Male(s),SC,S,Lethal Injection,No,No,No,No,Jasper
05/12/1993,Leonel Herrera,44,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Cameron
05/04/1999,Jose De La Cruz,31,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Nueces
05/10/1984,James Adams,47,m,Black,1 White Male(s),FL,S,Electrocution,No,No,No,No,St. Lucie
05/04/1989,Aubrey Adams,31,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Marion
05/11/1990,Winford Stokes,39,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Washington
05/07/1992,Justin May,46,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazoria
05/07/1992,Stephen Hill,25,m,White,1 White Male(s),AR,S,Lethal Injection,No,No,No,No,Saline
05/12/1992,Nollie Martin,43,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Palm Beach
05/04/1993,Darryl Stewart,38,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/05/1993,Larry Johnson,49,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Madison
05/11/1994,Jonas Whitmore,50,m,White,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Arkansas
05/02/1995,Keith Zettlemoyer,39,m,White,1 White Male(s),PA,N,Lethal Injection,No,No,Yes,No,Dauphin
05/10/1995,Duncan McKenzie,43,m,White,1 White Female(s),MT,W,Lethal Injection,No,No,No,No,Pondera
05/06/1997,Terry Washington,33,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Walker
05/08/1997,Scott Carpenter,22,m,Native American,1 White Male(s),OK,S,Lethal Injection,No,No,Yes,No,McIntosh
05/08/1998,Steven Thompson,34,m,White,1 White Female(s),AL,S,Electrocution,No,No,No,No,Madison
05/04/1999,Manuel Babbitt,50,m,Black,1 White Female(s),CA,W,Lethal Injection,No,No,No,No,Sacramento
05/05/1999,Robert Vickers,41,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Pinal
05/04/2000,Tommy Jackson,43,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Williamson
05/09/2000,William Kitchens,37,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Taylor
05/01/2001,Marilyn Plantz,40,f,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
05/09/2002,Reginald Reeves,28,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Red River
05/10/2002,Lynda Block,54,f,White,1 White Male(s),AL,S,Electrocution,No,No,Yes,No,Lee
05/10/2002,Lesile Martin,35,m,White,1 White Female(s),LA,S,Lethal Injection,No,No,No,No,Calcasieu Parish
05/06/2003,Roger Vaughn,47,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Wilbarger
06/12/1987,Jimmy Glass,25,m,White,1 White Male(s)1 White Female(s),LA,S,Electrocution,No,No,No,No,Lafayette Parish
06/11/2001,Timothy McVeigh*,33,m,White,129 White 2 Native American 5 Latino 32 Black,FE,S,Lethal Injection,No,Yes,Yes,No,Oklahoma
06/11/1997,Earl Behringer,33,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
06/09/1998,David Cargill,39,m,White,1 White Male(s)1 White Female(s),GA,S,Electrocution,No,No,No,No,Bibb
06/02/2000,Pernell Ford,35,m,Black,2 White Female(s),AL,S,Electrocution,No,No,Yes,No,Calhoun
06/12/2000,Wayne Mason,48,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Smith
06/10/1988,Arthur Bishop,37,m,White,5 White Male(s),UT,W,Lethal Injection,No,No,Yes,No,Salt Lake
06/06/1997,Henry Hays,42,m,White,1 Black Male(s),AL,S,Electrocution,No,No,No,No,Mobile
06/07/2000,Bennie Demps,49,m,Black,1 Black Male(s),FL,S,Lethal Injection,No,No,No,No,Bradford
06/05/2003,Kenneth Charm,37,m,Black,1 Black,OK,S,Lethal Injection,No,No,No,No,Comanche
06/04/1997,Davis Losada,32,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Cameron
06/03/1999,Scotty Moore,43,m,White,1 Latino Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
06/09/1986,Rudy Esquivel,50,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/07/1987,Benjamin Berry,31,m,White,1 White Male(s),LA,S,Electrocution,No,No,No,No,Jefferson Parish
06/09/1987,Alvin Moore,27,m,Black,1 White Female(s),LA,S,Electrocution,No,No,No,No,Bossier Parish
06/03/1990,Thomas Baal,26,m,White,1 White Female(s),NV,W,Lethal Injection,No,No,Yes,No,Clark
06/01/1995,Fletcher Mann,34,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/08/1995,Ronald Allridge,34,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
06/02/1997,Patrick Rogers,33,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Collin
06/03/1997,Kenneth Harris,34,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/04/1997,Dorsie Johnson,30,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Scurry
06/03/1998,Douglas Gretzler,47,m,White,1 White Male(s)1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Pima
06/11/1998,Clifford Boggess,33,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Clay
06/01/1999,William Little,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Liberty
06/01/2000,James Robedeaux,51,m,Native American,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
06/06/2000,Feltus Taylor,38,m,Black,1 White Female(s),LA,S,Lethal Injection,No,No,No,No,East Baton Rouge Parish
06/08/2000,Roger Berget,39,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
06/12/2002,Walter Mickens,47,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Newport News City
06/11/2003,Kia Johnson,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
07/01/1993,Curtis Harris,31,m,Black,1 White Male(s),TX,S,Lethal Injection,Yes,No,No,No,Brazos
07/06/1999,Gary Heidnick,55,m,White,2 Black Female(s),PA,N,Lethal Injection,No,No,Yes,No,Philadelphia
07/12/2000,Orien Joiner,50,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
07/09/2003,Riley Noel,31,m,Black,3 Black Male(s),AR,S,Lethal Injection,No,No,No,No,Pulaski
07/08/1999,Allen Davis,54,m,White,3 White Female(s),FL,S,Electrocution,No,No,No,No,St. Johns
07/01/1995,Roger Stafford,43,m,White,1 White Female(s)1 Latino Male(s)1 Black Male(s)3 White Male(s),OK,S,Lethal Injection,No,No,No,No,McClain
07/08/1987,Connie Evans,27,m,Black,1 Asian Male(s),MS,S,Gas Chamber,No,No,No,No,Hinds
07/06/2000,Michael Clagett,39,m,White,1 White Male(s)1 White Female(s)2 Asian Male(s),VA,S,Electrocution,No,No,No,No,Virginia Beach City
07/10/1998,John Plath,43,m,White,1 Black Female(s),SC,S,Lethal Injection,No,No,No,No,Beaufort
07/08/1999,Norman Newsted,45,m,White,1 Black Male(s),OK,S,Lethal Injection,No,No,No,No,Osage
07/09/2003,Christopher Black,43,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Bell
07/12/1984,Ivon Stanley,28,m,Black,1 White Male(s),GA,S,Electrocution,No,No,No,No,Decatur
07/09/1985,Henry Porter,43,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
07/06/1987,Richard Whitley,41,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Fairfax City
07/08/1987,John Thompson,32,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
07/01/1997,Harold McQueen,44,m,White,1 White Female(s),KY,S,Electrocution,No,No,No,No,Madison
07/02/1997,Flint Hunt,38,m,Black,1 White Male(s),MD,S,Lethal Injection,No,No,No,No,Baltimore City
07/08/1998,Wilburn Henderson,56,m,White,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Sebastian
07/01/1999,Charles Tuttle,35,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Smith
07/07/1999,Tyrone Fuller,35,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Grayson
07/11/2001,Jerome Mallet,42,m,Black,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Perry
07/11/2001,James Wilkens,39,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Smith
07/01/2003,Lewis Gilbert,31,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Cleveland
07/02/2003,Hilton Crawford,64,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
07/08/2003,Robert Duckett,39,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
08/03/1994,James Holmes,37,m,White,1 White Male(s),AR,S,Lethal Injection,No,No,No,No,Benton
08/03/1994,Darryl Richley,43,m,White,1 White Male(s),AR,S,Lethal Injection,No,No,No,No,Benton
08/03/1994,Hoyt Clines,37,m,White,1 White Male(s),AR,S,Lethal Injection,No,No,No,No,Benton
08/08/1996,William Parker,41,m,White,1 White Male(s)1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Lincoln
08/09/1996,Stephen Hatch,42,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Canadian
08/06/1997,Eugene Perry,53,m,White,1 White Male(s)1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Van Buren
08/10/2000,George Wallace,59,m,White,2 White Male(s),OK,S,Lethal Injection,No,No,No,No,Le Flore
08/07/2003,Tommy Fortenberry,39,m,White,3 White Male(s)1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Etowah
08/07/1996,Thomas Battle,34,m,Black,1 Black Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
08/10/1982,Frank Coppola,38,m,White,1 White Male(s),VA,S,Electrocution,No,No,Yes,No,Newport News City
08/11/1992,Curtis Johnson,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/05/1993,Joseph Jernigan,39,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Navarro
08/12/1993,David Holland,58,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
08/02/1994,Robert Drew,35,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/11/1995,Robert Brecheen,40,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Carter
08/06/1997,Ralph Feltrop,42,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Jefferson
08/05/1998,Stephen Wood,38,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,Yes,No,Greer
08/04/1999,Ricky Blackmon,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Shelby
08/05/1999,Charles Boyd,39,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
08/06/1999,Victor Kennedy,37,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Shelby
08/10/1999,Kenneth Dunn,39,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/11/1999,James Earhart,56,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
08/09/2000,Brian Robertson,36,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
08/09/2000,Oliver Cruz,33,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
08/08/2001,Mack Hill,47,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
08/07/2002,Richard Kutzner,59,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
08/08/2002,T.J. Jones,25,m,Black,1 White Male(s),TX,S,Lethal Injection,Yes,No,No,No,Gregg
09/10/1987,Joseph Starvaggi,34,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
09/12/1990,Charles Walker,50,m,White,1 White Male(s)1 White Female(s),IL,M,Lethal Injection,No,No,Yes,No,St. Clair
09/08/1999,Alan Willett,52,m,White,2 White Male(s),AR,S,Lethal Injection,No,No,Yes,No,Johnson
09/03/2003,Paul Hill,49,m,White,2 White Male(s),FL,S,Lethal Injection,No,No,Yes,No,Escambia
09/06/1996,Michael Torrence,35,m,White,2 White Male(s)1 White Female(s),SC,S,Lethal Injection,No,No,Yes,No,Charleston
09/06/1996,Douglas Wright,56,m,White,3 White Male(s),OR,W,Lethal Injection,No,No,Yes,No,Wasco
09/08/1999,Mark Gardner,43,m,White,1 White Male(s)2 White Female(s),AR,S,Lethal Injection,No,No,No,No,Sebastian
09/01/1999,Raymond Jones,39,m,Black,1 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
09/06/1991,Donald Gaskins,58,m,White,1 Black Male(s),SC,S,Electrocution,No,No,No,No,Williamsburg
09/09/1997,James Davis,34,m,Black,2 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Travis
09/10/1999,Willis Barnes,51,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/10/2002,Tony Walker,36,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Morris
09/02/1983,Jimmy  Gray,34,m,White,1 White Female(s),MS,S,Gas Chamber,No,No,No,No,Jackson
09/07/1984,Ernest Dobbert,46,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Duval
09/10/1984,Timothy Baldwin,46,m,White,1 White Female(s),LA,S,Electrocution,No,No,No,No,Ouachita Parish
09/11/1985,Charles Rumbaugh,28,m,White,1 White Male(s),TX,S,Lethal Injection,Yes,No,Yes,No,Potter
09/01/1987,Billy Mitchell,35,m,Black,1 White Male(s),GA,S,Electrocution,No,No,No,No,Worth
09/10/1990,Charles Coleman,43,m,White,1 White,OK,S,Lethal Injection,No,No,No,No,Muskogee
09/03/1993,Johnny James,39,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Chambers
09/02/1994,Harold Otey,43,m,Black,1 White Female(s),NE,M,Electrocution,No,No,No,No,Douglas
09/09/1998,Delbert Teague,37,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
09/01/1999,David Leisure,49,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Jefferson
01/25/2001,Billy Fox,35,m,White,2 White Male(s)1 Asian Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/23/2001,Mark Fowler,35,m,White,2 White Male(s)1 Asian Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/31/2002,David Woodruff,42,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/29/2002,John Romano,43,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/30/2001,Loyd Lafevers,35,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/30/1996,William Flamer,41,m,Black,1 Black Male(s)1 Black Female(s),DE,S,Lethal Injection,No,No,No,No,Kent
01/30/2002,Windell Broussard,41,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
01/29/1997,Eric Schneider,35,m,White,2 White Male(s),MO,M,Lethal Injection,No,No,No,No,Jefferson
01/13/1999,Kelvin Malone,37,m,Black,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
01/20/1999,Mark Sheppard,27,m,Black,1 White Male(s)1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Chesterfield
01/29/2003,Richard Dinkins,40,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
01/19/1993,Charles Stamper,39,m,Black,3 White Male(s),VA,S,Electrocution,No,No,No,No,Chesterfield
01/14/2003,Samuel Gallamore,31,m,White,2 White Female(s)1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Comal
01/23/1997,Randy Greenawalt,47,m,White,2 White Male(s)2 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Yuma
01/21/2000,Larry Robison,42,m,White,3 White Male(s)2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
01/27/1993,Martsay Bolder,35,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,Randolph
01/24/1995,Kermit Smith,37,m,White,1 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Halifax
01/20/2000,David Hicks,38,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Freestone
01/30/1987,Ramon Hernandez,44,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,Yes,No,El Paso
01/17/1995,Mario Marquez,36,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
01/16/2002,Jermarr Arnold,43,m,Black,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Nueces
01/15/2003,John Baltazar,30,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Nueces
01/16/2003,Daniel Revilla,34,m,White,1 Latino Male(s),OK,S,Lethal Injection,No,No,No,No,Jackson
01/28/2003,Alva Curry,33,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Travis
01/21/1998,Jose Jesus Ceja,42,m,Latino,1 Latino Female(s)1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
01/17/1977,Gary Gilmore,36,m,White,1 White Male(s),UT,W,Firing Squad,No,No,Yes,No,Utah
01/26/1984,Anthony Antone,66,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Hillsborough
01/16/1985,Doyle Skillern,48,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Live Oak
01/30/1985,James Raulerson,33,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Duval
01/24/1989,Theodore Bundy,42,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Columbia
01/18/1990,Gerald Smith,31,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,Yes,No,Washington
01/22/1992,Mark Hopkinson,42,m,White,1 White Male(s),WY,W,Lethal Injection,No,No,No,No,Uinta
01/22/1992,Joe Cordova,39,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
01/24/1992,Ricky Rector,40,m,Black,1 White Male(s),AR,S,Lethal Injection,No,No,No,No,Conway
01/24/1995,Dana Edmonds,32,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Danville City
01/31/1995,Clifton Russell,33,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Taylor
01/31/1995,Willie Williams,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
01/23/1996,Richard Townes,45,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Virginia Beach City
01/25/1996,Billy Bailey,49,m,White,1 White Male(s)1 White Female(s),DE,S,Hanging,No,No,No,No,Kent
01/27/1996,John Taylor,36,m,White,1 White Female(s),UT,W,Firing Squad,No,No,Yes,No,Weber
01/21/1998,Lloyd Hampton,44,m,White,1 White Male(s),IL,M,Lethal Injection,No,No,Yes,No,Madison
01/29/1998,Robert Smith,47,m,White,1 White Male(s),IN,M,Lethal Injection,No,No,Yes,No,Sullivan
01/30/1998,Ricky Sanderson,38,m,White,1 White Female(s),NC,S,Gas Chamber,No,No,Yes,No,Iredell
01/13/1999,Jess Gillies,38,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
01/13/1999,Troy Farris,36,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
01/26/1999,Martin Vega,52,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Caldwell
01/13/2000,Gary Walker,46,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
01/13/2000,Steven Roach,23,m,White,1 White Female(s),VA,S,Lethal Injection,Yes,No,No,No,Greene
01/18/2000,Spencer Goodman,31,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Fort Bend
01/24/2000,Billy Hughes,47,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Matagorda
01/25/2000,Glenn McGinnis,27,m,Black,1 White Female(s),TX,S,Lethal Injection,Yes,No,No,No,Montgomery
01/27/2000,James Moreland,39,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Henderson
01/16/2001,Floyd Medlock,29,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,Yes,No,Canadian
01/18/2001,Alvin Goodwin,37,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
01/18/2001,Dion Smallwood,31,m,Native American,1 Latino Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/29/2001,Caruthers Alexander,52,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
01/24/2002,Ronald Spivey,62,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Muscogee
01/29/2002,Stephen Anderson,48,m,White,1 White Female(s),CA,W,Lethal Injection,No,No,No,No,San Bernardino
01/31/2002,Randall Hafdahl,48,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Randall
01/22/2003,Robert Lookingbill,37,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Hidalgo
01/30/2003,Granville Riddle,32,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Potter
01/22/1999,Joseph Atkins,51,m,White,1 Black Male(s)1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Charleston
10/28/1997,Kenneth Ransom,34,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
10/21/1998,Ronald Fitzgerald,29,m,Black,2 Black Male(s),VA,S,Lethal Injection,No,No,No,No,Pittsylvania
10/23/1992,John Gardner,34,m,White,1 White Male(s)1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Forsyth
10/04/1996,Larry Bell,47,m,White,2 White Female(s),SC,S,Electrocution,No,No,No,No,Lexington
10/01/1998,Javier Cruz,41,m,Latino,1 Black Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
10/07/1998,Jonathan Nobles,37,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Travis
10/13/1998,Jeremy Sagastegui,27,m,White,1 Latino Male(s)2 White Female(s),WA,W,Lethal Injection,No,No,Yes,No,Benton
10/19/1995,Mickey Davidson,38,m,White,3 White Female(s),VA,S,Lethal Injection,No,No,Yes,No,Smyth
10/18/2001,Christopher Beck,26,m,White,2 White Male(s)1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Arlington
10/17/1990,Wilbert Evans,44,m,Black,1 Black Male(s),VA,S,Electrocution,No,No,No,No,Fairfax
10/14/1998,Dwayne Wright,24,m,Black,1 Black Female(s),VA,S,Lethal Injection,Yes,No,No,No,Fairfax City
10/19/1999,Jason Joseph,27,m,Black,1 Black Male(s),VA,S,Lethal Injection,No,No,No,No,Portsmouth City
10/12/2001,David Ward,39,m,Black,1 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Pitt
10/27/1999,Ignacio Ortiz,57,m,Latino,1 Latino Female(s),AZ,W,Lethal Injection,No,No,No,No,Pima
10/02/2002,Rigoberto Sanchez-Velasco,43,m,Latino,1 Latino Female(s),FL,S,Lethal Injection,No,No,Yes,Yes,Miami-Dade
10/10/2000,Bobby Ramdass,28,m,Black,1 Other Male(s),VA,S,Lethal Injection,No,No,No,No,Fairfax
10/22/1979,Jesse Bishop,46,m,White,1 White Male(s),NV,W,Gas Chamber,No,No,Yes,No,Clark
10/12/1984,Linwood Briley,30,m,Black,1 White Male(s),VA,S,Electrocution,No,No,No,No,Richmond City
10/30/1984,Ernest Knighton,38,m,Black,1 White Male(s),LA,S,Electrocution,No,No,No,No,Bossier Parish
10/30/1984,Thomas Barefoot,39,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bell
10/16/1985,William Vandiver,37,m,White,1 White Male(s),IN,M,Electrocution,No,No,Yes,No,Lake
10/18/1991,Michael McDougall,36,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Mecklenburg
10/21/1992,Ricky Lee Grubbs,33,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Francois
10/06/1993,Frank Guinan,47,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Franklin
10/05/1994,Walter Williams,32,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
10/04/1995,Harold Lane,50,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
10/21/1996,John Bush,38,m,Black,1 White Female(s),FL,S,Electrocution,No,No,No,No,Martin
10/01/1997,Dwight Adanandus,41,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
10/08/1997,Ricky Green,36,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
10/13/1997,Gary Davis,53,m,White,1 White Female(s),CO,W,Lethal Injection,No,No,No,No,Adams
10/22/1997,Alan Bannister,39,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,McDonald
10/05/1998,Roderick Abeyta,44,m,Latino,1 White Female(s),NV,W,Lethal Injection,No,No,Yes,No,Clark
10/12/1999,Alvin Crane,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Ochiltree
10/14/1999,Jerry McFadden,51,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Upshur
10/15/1999,Joesph Parsons,35,m,White,1 White Male(s),UT,W,Lethal Injection,No,No,Yes,No,Iron
10/21/1999,Arthur Boyd,53,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Surry
10/28/1999,Domingo Cantu,31,m,Native American,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
10/18/2001,Alvie Hale,53,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Pottawatomie
10/22/2001,Gerald Mitchell,33,m,Black,1 White Male(s),TX,S,Lethal Injection,Yes,No,No,No,Harris
10/24/2001,Stephen Johns,55,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
10/25/2001,Terry Mincey,40,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Bibb
10/01/2002,James Powell,56,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Newton
10/09/2002,Aileen Wournos,46,f,White,1 White Male(s),FL,S,Lethal Injection,No,No,Yes,No,Volusia
11/12/1991,G.W. Green,54,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
11/16/1999,Desmond Jennings,46,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
11/17/2000,Dwayne Weeks,37,m,Black,1 Black Male(s)1 Black Female(s),DE,S,Lethal Injection,No,No,No,No,New Castle
11/15/1996,Doyle Lucas,41,m,White,1 White Male(s)1 White Female(s),SC,S,Lethal Injection,No,No,Yes,No,York
11/19/1997,Walter Stewart,42,m,Black,2 White Male(s),IL,M,Lethal Injection,No,No,No,No,Cook
11/19/1997,Michael Sharp,43,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Ector
11/17/1998,Kenneth McDuff,52,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,McLennan
11/20/1998,John Noland,50,m,White,1 White Female(s)1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Mecklenburg
11/19/1999,David Brown,51,m,Black,2 White Female(s),NC,S,Lethal Injection,No,No,No,No,Union
11/15/2001,Fred Gilreath,63,m,White,1 White Female(s)1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Cobb
11/13/2002,William Putman,59,m,White,1 White Male(s)1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Laurens
11/20/2002,William Chappell,66,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
11/14/1996,Larry Lonchar,45,m,White,2 White Male(s)1 White Female(s),GA,S,Electrocution,No,No,No,No,DeKalb
11/04/1997,Aua Lauti,43,m,Asian,1 Asian Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/17/1989,Arthur Julius,43,m,Black,1 Black Female(s),AL,S,Electrocution,No,No,No,No,Montgomery
11/19/1992,Jeffery Griffin,37,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/22/1996,Frank Middleton,33,m,Black,1 Black Female(s),SC,S,Lethal Injection,No,No,No,No,Charleston
11/19/1997,Durlyn Eddmonds,42,m,Black,1 Black Male(s),IL,M,Lethal Injection,No,No,No,No,Cook
11/20/1997,Gary Burris,40,m,Black,1 Black Male(s),IN,M,Lethal Injection,No,No,No,No,Marion
11/17/1998,Kenneth Wilson,34,m,Black,1 Black Female(s),VA,S,Lethal Injection,No,No,No,No,Newport News City
11/09/1999,Thomas Royal,32,m,Black,1 Black Male(s),VA,S,Lethal Injection,No,No,No,No,Hampton City
11/09/2000,Michael Sexton,34,m,Black,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Wake
11/15/2000,Tony Chambers,32,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Smith
11/15/2001,Emerson Rudd,31,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
11/30/1983,Robert Sullivan,36,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Miami-Dade
11/02/1984,Velma Barfield,52,f,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Robeson
11/08/1984,Timothy Palmes,37,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Duval
11/03/1988,Donald Franklin,37,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
11/07/1988,Jeffrey Daugherty,33,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Brevard
11/19/1990,Raymond Clark,49,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Pinellas
11/20/1992,Cornelius Singleton,36,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Mobile
11/10/1993,Anthony Cook,32,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Matagorda
11/22/1994,Warren Bridge,34,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Galveston
11/13/1995,Herman Barnes,31,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Hampton City
11/15/1995,Robert Sidebottom,33,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Jackson
11/22/1995,George del Vecchio,47,m,White,1 White Male(s),IL,M,Lethal Injection,No,No,No,No,Cook
11/29/1995,Anthony LaRette,44,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Warren
11/15/1996,Ellis Felker,48,m,White,1 White Female(s),GA,S,Electrocution,No,No,No,No,Houston
11/21/1996,Ronald Bennett,42,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Richmond
11/06/1997,Aaron Fuller,30,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dawson
11/07/1997,Earl Matthews,32,m,Black,1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Charleston
11/13/1997,Dawud Majid Mu'Min,44,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Prince William
11/21/1997,Charlie Livingston,35,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/16/1998,Tyrone Gilliam,32,m,Black,1 White Female(s),MD,S,Lethal Injection,No,No,No,No,Baltimore
11/12/1999,Leroy Drayton,44,m,Black,1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Charleston
11/17/1999,John Lamb,42,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hunt
11/18/1999,Jose Gutierrez,39,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
11/01/2000,Jeffrey Dillingham,27,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Wichita
11/03/2000,Kevin Young,32,m,Black,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Anderson
11/08/2000,Donald Miller,36,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Pima
11/09/2000,Miguel Flores,31,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,Yes,Hutchinson
11/14/2000,Stacey Lawton,31,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Smith
11/15/2000,James Chambers,48,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
11/06/2001,Jose High,45,m,Black,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Taliaferro
11/06/2001,Terry Clark,45,m,White,1 White Female(s),NM,W,Lethal Injection,No,No,Yes,No,Grant
11/14/2001,Jeffrey Tucker,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Parker
11/30/2001,John Rose,43,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Haywood
11/14/2002,Mir Aimal Kasi,38,m,Other,1 White Male(s),VA,S,Lethal Injection,No,No,No,Yes,Fairfax
11/19/2002,Craig Ogan,47,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/20/2002,William Jones,37,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Jackson
12/08/1994,Gregory Resnover,43,m,Black,1 White Male(s),IN,M,Electrocution,No,No,No,No,Marion
12/04/1998,J.D. Gleaton,53,m,Black,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Lexington
12/04/1998,Larry Gilbert,43,m,Black,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Lexington
12/07/1995,Hai Hai Vuong,40,m,Asian,2 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
12/18/1998,Andy Smith,38,m,Black,1 Black Male(s)1 Black Female(s),SC,S,Lethal Injection,No,No,No,No,Anderson
12/06/2001,Sahib Al-Mosawi,53,m,Other,1 Other Male(s)1 Other Female(s),OK,S,Lethal Injection,No,No,No,Yes,Oklahoma
12/15/1983,John Smith,53,m,White,1 White Male(s)1 White Female(s),GA,S,Electrocution,No,No,No,No,Bibb
12/09/1999,D.H. Fleenor,48,m,White,1 White Male(s)1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Jefferson
12/11/2002,James Collier,56,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Wichita
12/07/1998,Daniel Corwin,40,m,White,3 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
12/10/1998,Tuan Nguyen,39,m,Asian,1 White Male(s)2 White Female(s),OK,S,Lethal Injection,No,No,No,Yes,Tulsa
12/08/1999,David Long,46,m,White,3 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
12/10/2002,Jerry McCracken,35,m,White,3 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
12/12/2002,Anthony Johnson,46,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Madison
12/10/1992,Timothy Bunch,33,m,White,1 Asian Female(s),VA,S,Electrocution,No,No,No,No,Prince William
12/14/1983,Robert Williams,31,m,Black,1 Black Male(s),LA,S,Electrocution,No,No,No,No,East Baton Rouge Parish
12/13/1988,Raymond Landry,39,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/06/1995,Robert O'Neal,44,m,White,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,Butler
12/11/1997,Thomas Beavers,26,m,White,1 Black Female(s),VA,S,Lethal Injection,No,No,No,No,Hampton City
12/03/1998,Kevin Cardwell,29,m,Black,1 Black Male(s),VA,S,Lethal Injection,No,No,No,No,Henrico
12/09/1999,Andre Graham,29,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Chesterfield
12/06/2000,Christopher Goins,27,m,Black,1 Black Female(s),VA,S,Lethal Injection,No,No,No,No,Richmond
12/19/2000,David Johnson,37,m,Black,1 Black Male(s),AR,S,Lethal Injection,No,No,No,No,Pulaski
12/09/2002,Linroy Bottoson,63,m,Black,1 Black Female(s),FL,S,Lethal Injection,No,No,No,No,Orange
12/04/1986,Michael Evans,30,m,Black,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
12/18/1986,Richard Andrade,25,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Nueces
12/07/1989,Carlos De Luna,27,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Mitchell
12/05/1995,Philip Atkins,40,m,White,1 Latino Male(s),FL,S,Electrocution,No,No,No,No,Polk
12/15/1998,James Meanes,42,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/07/1982,Charlie Brooks,40,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
12/12/1984,Alpha Stephens,39,m,Black,1 White Male(s),GA,S,Electrocution,No,No,No,No,Bleckley
12/28/1984,Robert Willie,26,m,White,1 White Female(s),LA,S,Electrocution,No,No,No,No,Washington Parish
12/06/1985,Carroll Cole,47,m,White,1 White Female(s),NV,W,Lethal Injection,No,No,Yes,No,Clark
12/13/1990,Buddy Justus,38,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Montgomery
12/10/1992,Kavin Lincecum,29,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazoria
12/07/1993,Christopher Burger,33,m,White,1 White Male(s),GA,S,Electrocution,Yes,No,No,No,Liberty
12/15/1993,Clifford Phillips,59,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/16/1993,David Pruett,44,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Virginia Beach City
12/06/1994,Herman Clark,48,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/11/1994,Raymond Kinnamon,53,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/04/1995,Jerry White,47,m,Black,1 White Male(s),FL,S,Electrocution,No,No,No,No,Orange
12/06/1995,Bernard Amos,33,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
12/11/1995,Esequel Banda,31,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Hamilton
12/12/1995,James Briddle,40,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/03/1996,Gregory Beaver,30,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Prince George
12/06/1996,John Mills,41,m,Black,1 White Male(s),FL,S,Electrocution,No,No,No,No,Wakulla
12/10/1996,Larry Stout,33,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Staunton City
12/11/1996,Richard Zeitvogel,40,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Cole
12/12/1996,Lem Tuggle,44,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Smyth
12/16/1996,Ronald Hoke,39,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Petersburg City
12/02/1997,Robert Williams,61,m,Black,1 White Female(s),NE,M,Electrocution,No,No,No,No,Sarpy
12/09/1997,Michael Lockhart,37,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
12/09/1997,Michael Satcher,29,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Arlington
12/08/1998,Jeff Emery,39,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
12/11/1998,Louis Truesdale,40,m,Black,1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Lancaster
12/17/1998,John Duvall,47,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Stephens
12/02/1999,Cornel Cooks,43,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Comanche
12/03/1999,David Rocheville,31,m,White,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Spartanburg
12/09/1999,Bobby Ross,41,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Roger Mills
12/09/1999,James Beathard,42,m,White,2 White Female(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Trinity
12/14/1999,Robert Atworth,30,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Dallas
12/15/1999,Sammie Felder,54,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/05/2000,Garry Miller,33,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Jones
12/06/2000,Daniel Hittle,50,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
12/07/2000,Edward Castro,50,m,Latino,1 White Male(s),FL,S,Lethal Injection,No,No,Yes,No,Marion
12/07/2000,Claude Jones,60,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,San Jacinto
12/04/2001,Lois Smith,61,f,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Sequoyah
12/11/2001,Byron Parker,41,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Douglas
12/12/2001,Vincent Cooks,37,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
12/06/2002,Ernest Basden,49,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Duplin
12/10/2002,Desmond Carter,35,m,Black,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Rockingham
12/11/2002,Jessie Williams,51,m,White,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Jackson
12/12/2002,Jay Neill,37,m,White,1 White Male(s)3 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
12/17/2002,Ernest Carter,36,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
12/04/2002,Leonard Rojas,52,m,Latino,1 Latino Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Johnson
02/24/1999,Karl LaGrand,35,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,No,Yes,Pima
02/25/1998,Reginald Powell,29,m,Black,2 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
02/28/1992,David Clark,32,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
02/20/1998,Michael Long,35,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,Yes,No,Muskogee
02/24/1998,Terry Langford,31,m,White,1 White Male(s)1 White Female(s),MT,W,Lethal Injection,No,No,No,No,Powell
02/16/1999,Andrew Cantu,31,m,Latino,2 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Taylor
02/16/1999,Johnie Cox,42,m,White,1 White Male(s)2 White Female(s),AR,S,Lethal Injection,No,No,No,No,White
02/23/1996,William Bonin,49,m,White,4 White Male(s),CA,W,Lethal Injection,No,No,No,No,Los Angeles
02/27/1996,Kenneth Granviel,45,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
02/25/2003,Richard Williams,33,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/29/1984,John Taylor,30,m,Black,1 White Male(s),LA,S,Electrocution,No,No,No,No,Jefferson Parish
02/20/1985,Van Solomon,41,m,Black,1 White Male(s),GA,S,Electrocution,No,No,No,No,Cobb
02/26/1991,Lawrence Buxton,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/16/1995,Billy Gardner,51,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
02/21/1995,Samuel Hawkins,51,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
02/16/1996,Edward Horsley,38,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Monroe
02/21/1996,Jeffery Sloan,29,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Clay
02/26/1997,Coleman Gray,39,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Portsmouth City
02/19/1999,Wilford Berry,36,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,Yes,No,Cuyahoga
02/24/1999,James Rodden,38,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Clay
02/24/1999,Norman Green,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
02/16/2000,Anthony Chaney,45,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Coconino
02/23/2000,Terry Sims,58,m,White,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Seminole
02/23/2000,Cornelius Goss,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
02/24/2000,Anthony Bryan,40,m,White,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Santa Rosa
02/24/2000,Betty Beets,62,f,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Henderson
02/19/2002,John Byrd,38,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
02/28/2002,Monty Delk,35,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Anderson
02/13/2003,Bobby Fields,39,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
02/26/2003,Amos King,48,m,Black,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pinellas
03/15/2000,Patrick Poland,50,m,White,2 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Yavapai
03/28/2001,Thomas Ervin,50,m,White,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Callaway
03/25/2003,John Hooker,49,m,Black,2 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
03/16/1984,James Hutchins,54,m,White,2 White Male(s),NC,S,Lethal Injection,No,No,No,No,McDowell
03/14/1992,Steven Pennell,34,m,White,2 White Female(s),DE,S,Lethal Injection,No,No,Yes,No,New Castle
03/30/1996,Richard Moran,42,m,White,1 White Male(s)1 White Female(s),NV,W,Lethal Injection,No,No,No,No,Clark
03/20/1985,John Young,28,m,Black,1 White Male(s)2 White Female(s),GA,S,Electrocution,No,No,No,No,Bibb
03/13/1992,Olan Robison,46,m,White,3 White Female(s),OK,S,Lethal Injection,No,No,No,No,Stephens
03/27/2001,Ronald Fluke,52,m,White,3 White Female(s),OK,S,Lethal Injection,No,No,Yes,No,Tulsa
03/18/1998,Douglas Buchanan,29,m,White,3 White Male(s)1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Amherst
03/18/1993,Syvasky Poyner,36,m,Black,4 White Female(s)1 Black Female(s),VA,S,Electrocution,No,No,No,No,York
03/14/2000,Ponchai Wilkerson,28,m,Black,1 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/31/1994,William Hance,45,m,Black,1 Black Female(s),GA,S,Electrocution,No,No,No,No,Muscogee
03/20/1995,Thomas Grasso,32,m,White,1 Black Female(s),OK,S,Lethal Injection,No,No,Yes,No,Tulsa
03/25/1997,Pedro Medina,39,m,Latino,1 Black Female(s),FL,S,Electrocution,No,No,No,Yes,Orange
03/25/1998,Milton Griffin-El,37,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
03/18/2003,Walanzo Robinson,31,m,Black,1 Black Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
03/23/1993,Carlos Santana,40,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,Yes,Harris
03/16/2000,Lonnie Weeks,28,m,Black,1 Latino Male(s),VA,S,Lethal Injection,No,No,No,No,Prince William
03/20/2003,Keith Clay,35,m,Black,1 Other Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/14/1984,James Autry,29,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
03/31/1984,Ronald O'Bryan,39,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/13/1985,Stephen Morin,37,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Jefferson
03/21/1986,Arthur Jones,47,m,Black,1 White Male(s),AL,S,Electrocution,No,No,No,No,Mobile
03/15/1988,Willie Darden,54,m,Black,1 White Male(s),FL,S,Electrocution,No,No,No,No,Polk
03/15/1988,Wayne Felde,38,m,White,1 White Male(s),LA,S,Electrocution,No,No,No,No,Caddo Parish
03/22/1989,Leon King,44,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/20/1992,Larry Heath,40,m,White,1 White Female(s),AL,S,Electrocution,No,No,No,No,Russell
03/25/1993,Ramon Montoya,38,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,Yes,Dallas
03/31/1994,Freddie Webb,33,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Nueces
03/17/1995,Nelson Shelton,27,m,White,1 White Male(s),DE,S,Lethal Injection,No,No,Yes,No,New Castle
03/22/1995,Hernando Williams,40,m,Black,1 White Female(s),IL,M,Lethal Injection,No,No,No,No,Cook
03/22/1995,James Free,41,m,White,1 White Female(s),IL,M,Lethal Injection,No,No,No,No,DuPage
03/23/1998,Gerald Stano,46,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Volusia
03/24/1998,Leo Jones,47,m,Black,1 White Male(s),FL,S,Electrocution,No,No,No,No,St. Johns
03/25/1998,Ronald Watkins,35,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Pittsylvania
03/30/1998,Judy Buenoano,54,f,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Orange
03/31/1998,Daniel Remeta,40,m,Native American,1 White Female(s),FL,S,Electrocution,No,No,No,No,Marion
03/17/1999,Andrew Kokoraleis,35,m,White,1 White Female(s),IL,M,Lethal Injection,No,No,No,No,DuPage
03/25/1999,Charles Rector,44,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Travis
03/26/1999,David Fisher,57,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Bedford
03/26/1999,James Rich,26,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,Yes,No,Greene
03/30/1999,Robert White,61,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Collin
03/15/2000,Darrell Rich,45,m,Native American,3 White Female(s),CA,W,Lethal Injection,No,No,No,No,Yolo
03/15/2000,Timothy Gribble,36,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Galveston
03/22/2000,James Hampton,62,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,Yes,No,Callaway
03/23/2000,Kelly Rogers,31,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Payne
03/14/2001,Gerald Bivins,41,m,White,1 White Male(s),IN,M,Lethal Injection,No,No,Yes,No,Boone
03/27/2001,Robert Massie,59,m,White,1 White Male(s),CA,W,Lethal Injection,No,No,Yes,No,San Francisco
03/14/2002,James Patterson,35,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,Yes,No,Prince George
03/13/2003,Michael Thompson,43,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Blount
03/18/2003,Louis Jones*,53,m,Black,1 White Female(s),FE,S,Lethal Injection,No,Yes,No,No,
03/25/2003,Larry Moon,57,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Catoosa
03/26/2003,James Colburn,43,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
04/22/1983,John Evans,33,m,White,1 White Male(s),AL,S,Electrocution,No,No,No,No,Mobile
04/18/1985,James Briley,28,m,Black,1 Black Male(s)1 Black Female(s),VA,S,Electrocution,No,No,No,No,Richmond City
04/22/1986,David Funchess,39,m,Black,1 White Male(s)1 White Female(s),FL,S,Electrocution,No,No,No,No,Duval
04/21/1992,Robert Harris,39,m,White,2 White Male(s),CA,W,Gas Chamber,No,No,No,No,San Diego
04/19/1996,James Clark,39,m,White,1 White Male(s)1 White Female(s),DE,S,Lethal Injection,No,No,Yes,No,New Castle
04/29/1997,Ernest Baldree,55,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Navarro
04/14/1999,Roy Ramsey,45,m,Black,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Jackson
04/20/1999,Arthur Jenkins,29,m,White,2 White Male(s),VA,S,Lethal Injection,No,No,No,No,Warren
04/25/2001,Mose Young,46,m,Black,3 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
04/21/1993,Robert Henderson,48,m,White,3 White Male(s),FL,S,Electrocution,No,No,No,No,Hernando
04/14/1993,James Clark,35,m,White,3 White Male(s)1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Cochise
04/23/1999,David Lawrie,37,m,White,4 White Male(s),DE,S,Lethal Injection,No,No,No,No,Kent
04/13/1988,Leslie Lowenfield,34,m,Black,1 Black Male(s)4 Black Female(s),LA,S,Electrocution,No,No,No,Yes,Jefferson Parish
04/14/1988,Earl Clanton,33,m,Black,1 Black Female(s),VA,S,Electrocution,No,No,No,No,Petersburg City
04/21/1990,Jerome Butler,54,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
04/28/1995,Willie Clisby,47,m,Black,1 Black Male(s),AL,S,Electrocution,No,No,No,No,Jefferson
04/25/2001,David Goff,32,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
04/17/2003,Larry Jackson,40,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
04/22/1998,Jose Villafuerte,45,m,Latino,1 Latino Female(s),AZ,W,Lethal Injection,No,No,No,Yes,Maricopa
04/30/2002,Rodolfo Hernandez,52,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Comal
04/22/2003,Juan Chavez,34,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
04/15/1986,Daniel Thomas,37,m,Black,1 White Female(s),FL,S,Electrocution,No,No,No,No,Polk
04/16/1986,Jeffrey Barney,28,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
04/27/1990,Ronald Woomer,35,m,White,1 White Female(s),SC,S,Electrocution,No,No,No,No,Richland
04/24/1991,Roy Harich,32,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Volusia
04/23/1992,William White,34,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/22/1994,Roy Allen Stewart,38,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Miami-Dade
04/26/1994,Larry Anderson,41,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/27/1994,Timothy Spencer,32,m,Black,1 White Female(s),VA,S,Electrocution,No,No,No,No,Richmond
04/19/1995,Richard Snell,64,m,White,1 White Male(s),AR,S,Lethal Injection,No,No,No,No,Miller
04/26/1996,Benjamin Brewer,38,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
04/14/1997,Billy Woods,50,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/16/1997,Kenneth Gentry,36,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Denton
04/21/1997,Benjamin Boyle,53,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Potter
04/24/1997,John Brown,35,m,White,1 White Male(s),LA,S,Lethal Injection,No,No,No,No,Orleans Parish
04/14/1998,Angel Breard,32,m,Latino,1 White Female(s),VA,S,Lethal Injection,No,No,No,Yes,Arlington
04/22/1998,Glennon Sweet,42,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Clay
04/22/1998,Joseph Cannon,38,m,White,1 White Female(s),TX,S,Lethal Injection,Yes,No,No,No,Hays
04/24/1998,Lesley Gosch,42,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Victoria
04/29/1998,Arthur Ross,43,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,Yes,No,Pima
04/29/1998,Frank McFarland,34,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
04/13/1999,Carl Chichester,36,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Prince William
04/28/1999,Ralph Davis,61,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Butler
04/28/1999,Aaron Foust,26,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Tarrant
04/29/1999,Ronald Yeatts,38,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Pittsylvania
04/14/2000,Robert Tarver,52,m,Black,1 White Male(s),AL,S,Electrocution,No,No,No,No,Russell
04/19/2000,Robert Coe,44,m,White,1 White Female(s),TN,S,Lethal Injection,No,No,No,No,Weakley
04/27/2000,Ronald Boyd,43,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
04/21/2001,Sebastian Bridges,37,m,White,1 White Male(s),NV,W,Lethal Injection,No,No,Yes,Yes,Clark
04/26/2001,David Dawson,46,m,White,1 White Female(s),DE,S,Lethal Injection,No,No,No,No,Kent
04/18/2002,Gerald Casey,47,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
04/26/2002,Alton Coleman,46,m,Black,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
04/24/2003,Gary Brown,44,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Jefferson
04/29/2003,David Brewer,44,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Greene
04/28/1999,Eric Payne,26,m,White,1 White Female(s)1 Black Female(s),VA,S,Lethal Injection,No,No,Yes,No,Richmond
05/29/1985,Marvin Francois,39,m,Black,6 Black Male(s),FL,S,Electrocution,No,No,No,No,Miami-Dade
05/17/1990,Leonard Laws,40,m,White,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,Yes,No,Schuyler
05/15/1986,Jay Pinkerton,24,m,White,2 White Female(s),TX,S,Lethal Injection,Yes,No,No,No,Potter
05/23/1991,Ignacio Cuevas,59,m,Latino,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/16/1997,Harry Moore,56,m,White,1 White Male(s)1 White Female(s),OR,W,Lethal Injection,No,No,Yes,No,Marion
05/28/1997,Robert Madden,34,m,White,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Leon
05/25/1999,Edward Harper,50,m,White,1 White Male(s)1 White Female(s),KY,S,Lethal Injection,No,No,Yes,No,Jefferson
05/27/2003,Robert Knighton,62,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Noble
05/27/1994,Charles Campbell,39,m,White,3 White Female(s),WA,W,Hanging,No,No,No,No,Snohomish
05/19/1997,Richard Drinkard,39,m,White,1 White Male(s)2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/16/2003,Newton Slawson,48,m,White,2 White Male(s)2 White Female(s),FL,S,Lethal Injection,No,No,Yes,No,Hillsborough
05/31/2000,Robert Carter,34,m,Black,1 Black Male(s)5 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Bastrop
05/15/1985,Jesse de la Rosa,24,m,Latino,1 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
05/15/1987,Joseph Mulligan,35,m,Black,1 Black Female(s),GA,S,Electrocution,No,No,No,No,Muscogee
05/16/1995,Thomas Ward,59,m,Black,1 Black Male(s),LA,S,Lethal Injection,No,No,No,No,Orleans Parish
05/26/1999,Jessie Wise,46,m,Black,1 Black Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
05/25/2000,Charles Foster,51,m,Black,1 Black Male(s),OK,S,Lethal Injection,No,No,No,No,Muskogee
05/23/2001,Samuel Smith,40,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,Callaway
05/25/2001,Abdullah Hameen,37,m,Black,1 Black Male(s),DE,S,Lethal Injection,No,No,No,No,New Castle
05/29/2001,Vincent Johnson,42,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Pottawatomie
05/20/1992,Jesus Romero,27,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Cameron
05/18/1998,Robert Carter,34,m,Black,1 Latino Female(s),TX,S,Lethal Injection,Yes,No,No,No,Harris
05/25/1979,John Spenkelink,30,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Leon
05/20/1986,Ronald Straight,42,m,White,1 White Male(s),FL,S,Electrocution,No,No,No,No,Duval
05/20/1987,Edward Johnson,26,m,Black,1 White Male(s),MS,S,Gas Chamber,No,No,No,No,Leake
05/22/1987,Richard Tucker,44,m,Black,1 White Female(s),GA,S,Electrocution,No,No,No,No,Bibb
05/28/1987,Anthony Williams,27,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/29/1987,William Tucker,31,m,White,1 White Female(s),GA,S,Electrocution,No,No,No,No,Muscogee
05/18/1989,Henry Willis,36,m,Black,1 White Male(s),GA,S,Electrocution,No,No,No,No,Berrien
05/24/1989,Stephen McCoy,41,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/26/1989,Michael Lindsey,28,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Mobile
05/17/1990,Johnny Anderson,30,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
05/18/1990,Dalton Prejean,30,m,Black,1 White Male(s),LA,S,Electrocution,Yes,No,No,No,Lafayette Parish
05/20/1992,Roger Coleman,33,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Buchanan
05/22/1992,Robert Black,45,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
05/18/1993,John Sawyers,37,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/17/1994,John Thanos,44,m,White,1 White Male(s),MD,S,Lethal Injection,No,No,Yes,No,Baltimore
05/27/1994,Stephen Nethery,33,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
05/17/1995,Girvies Davis,37,m,Black,1 White Male(s),IL,M,Lethal Injection,No,No,No,No,St. Clair
05/17/1995,Darrell Devier,39,m,White,1 White Female(s),GA,S,Electrocution,No,No,No,No,Bartow
05/25/1995,Willie Turner,49,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Southampton
05/31/1996,Robert South,51,m,White,1 White Male(s),SC,S,Lethal Injection,No,No,Yes,No,Lexington
05/13/1997,Anthony Westley,36,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/16/1997,Clifton Belyeu,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,McLennan
05/20/1997,Clarence Lackey,42,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tom Green
05/21/1997,Bruce Callins,37,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
05/22/1997,Larry White,47,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/19/1998,Pedro Muniz,41,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Williamson
05/23/2000,James Richardson,32,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Navarro
05/24/2000,Richard Foster,47,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Parker
05/25/2000,James Clayton,33,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Taylor
05/22/2001,Terrance James,41,m,Native American,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Muskogee
05/16/2002,Ronford Styron,32,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Liberty
05/22/2002,Johnny Martinez,29,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Nueces
05/28/2002,Napoleon Beazley,25,m,Black,1 White Male(s),TX,S,Lethal Injection,Yes,No,No,No,Smith
05/30/2002,Stanley Baker,35,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Brazos
05/15/2003,Bruce Jacobs,56,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/16/1987,Jimmy Wingo,35,m,White,1 White Male(s)1 White Female(s),LA,S,Electrocution,No,No,No,No,Lafayette Parish
06/16/1999,Michael Poland,59,m,White,2 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Yavapai
06/28/2000,Bert Hunter,53,m,White,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
06/25/1990,Ronald Simmons,49,m,White,10 White Female(s)6 White Male(s),AR,S,Lethal Injection,No,No,Yes,No,Pope
06/23/1994,Andre Deputy,45,m,Black,1 Black Male(s)1 Black Female(s),DE,S,Lethal Injection,No,No,No,No,Kent
06/27/2001,Jim Lowery,54,m,White,1 White Male(s)1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Boone
06/25/2002,Robert Coulson,33,m,White,2 White Male(s)3 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/17/1997,Eddie Johnson,44,m,Black,1 White Male(s)2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Aransas
06/19/2001,Juan Garza*,44,m,Latino,3 Latino Male(s),FE,S,Lethal Injection,No,Yes,No,No,
06/13/2003,Joseph Trueblood,46,m,White,1 White Male(s)2 White Female(s),IN,M,Lethal Injection,No,No,No,No,Tippecanoe
06/26/1998,Leopoldo Narvaiz,30,m,Latino,1 White Male(s)3 White Female(s),TX,S,Lethal Injection,No,No,No,No,Hays
06/25/1985,Charles Milton,34,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
06/21/1989,Leo Edwards,36,m,Black,1 Black Male(s),MS,S,Gas Chamber,No,No,No,No,Hinds
06/25/1991,Bobby Francis,46,m,Black,1 Black Male(s),FL,S,Electrocution,No,No,No,No,Monroe
06/21/1995,Larry Griffin,40,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
06/14/2001,Jay Scott,48,m,Black,1 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
06/26/2002,Jeffrey Williams,30,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/18/2003,Ernest Martin,42,m,Black,1 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
06/14/2000,John Burks,44,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,McLennan
06/20/1984,Carl Shriner,30,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Alachua
06/25/1985,Morris Mason,32,m,Black,1 White Female(s),VA,S,Electrocution,No,No,No,No,Northampton
06/19/1986,Kenneth Brock,37,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/24/1986,Jerome Bowden,34,m,Black,1 White Female(s),GA,S,Electrocution,No,No,No,No,Muscogee
06/24/1987,Elliot Johnson,28,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
06/14/1988,Edward Byrne,28,m,White,1 White Female(s),LA,S,Electrocution,No,No,No,No,Bossier Parish
06/19/1989,William Thompson,51,m,White,1 White Male(s),NV,W,Lethal Injection,No,No,Yes,No,Washoe
06/23/1989,Sean Flannagan,28,m,White,1 White Male(s),NV,W,Lethal Injection,No,No,Yes,No,Clark
06/18/1990,John Swindler,46,m,White,1 White Male(s),AR,S,Electrocution,No,No,No,No,Sebastian
06/26/1990,James Smith,37,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
06/17/1991,Jerry Bird,54,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Cameron
06/17/1993,Andrew Chabrol,36,m,White,1 White Female(s),VA,S,Electrocution,No,No,Yes,No,Virginia Beach City
06/28/1993,Thomas Stevens,36,m,White,1 White Male(s),GA,S,Electrocution,No,No,No,No,Liberty
06/29/1993,Markham Duff-Smith,46,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/14/1994,Denton Crank,38,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/15/1994,David Lawson,38,m,White,1 White Male(s),NC,S,Gas Chamber,No,No,No,No,Cabarrus
06/20/1995,John Fearance,40,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/21/1995,Karl Hammond,30,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
06/19/1996,Daren Bolton,29,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,Yes,No,Pima
06/13/1997,Michael Elkins,41,m,White,1 White Female(s),SC,S,Lethal Injection,No,No,Yes,No,Jasper
06/16/1997,David Stoker,38,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hale
06/18/1997,Irineo Montoya,30,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,Yes,Cameron
06/25/1997,William Woratzeck,51,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Pinal
06/15/1998,Johnny Pyles,40,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/18/1998,Dennis Eaton,41,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Fairfax
06/16/1999,Bruce Kilgore,38,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
06/17/1999,Stanley Faulder,61,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,Yes,Gregg
06/18/1999,Brian Baldwin,40,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Monroe
06/30/1999,Robert Walls,33,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
06/15/2000,William Bryson,29,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
06/15/2000,Paul Nuncio,31,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Hale
06/21/2000,Thomas Provenzano,51,m,White,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Orange
06/22/2000,Shaka Sankofa (Gary Graham),36,m,Black,1 White Male(s),TX,S,Lethal Injection,Yes,No,No,No,Orange
06/29/2000,Jessy San Miguel,29,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/13/2001,John Wheat,57,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
06/26/2001,Miguel Richardson,46,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
06/13/2002,Daniel Reneau,27,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Kerr
07/30/1992,William Andrews,37,m,Black,1 White Male(s)2 White Female(s),UT,W,Lethal Injection,No,No,No,No,Weber
07/30/1993,Danny Harris,32,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Brazos
07/18/1996,Tommie Smith,42,m,Black,1 White Male(s),IN,M,Lethal Injection,No,No,No,No,Marion
07/23/2002,Randall Cannon,42,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
07/26/1995,Robert Murray,32,m,Black,2 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
07/22/2003,Bryan Toles,31,m,Black,2 Black Male(s),OK,S,Lethal Injection,No,No,No,No,Comanche
07/21/1992,Edward Kennedy,47,m,Black,2 White Male(s),FL,S,Electrocution,No,No,No,No,Duval
07/17/1996,John Joubert,33,m,White,2 White Male(s),NE,M,Electrocution,No,No,No,No,Lancaster
07/29/2003,Harold McElmurry,33,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,McIntosh
07/13/1984,David Washington,34,m,Black,2 White Male(s)1 Black Female(s),FL,S,Electrocution,No,No,No,No,Miami-Dade
07/18/1995,Bernard Bolender,42,m,White,3 Latino Male(s)1 White Male(s),FL,S,Electrocution,No,No,No,No,Miami-Dade
07/19/1996,Fred Kornahrens,47,m,White,2 White Male(s)1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Charleston
07/22/1991,Andrew Jones,35,m,Black,1 Black Female(s),LA,S,Electrocution,No,No,No,No,East Baton Rouge Parish
07/28/1993,Frederick Lashley,29,m,Black,1 Black Female(s),MO,M,Lethal Injection,Yes,No,No,No,St. Louis City
07/21/1999,Thomas Strickler,33,m,White,1 Black Female(s),VA,S,Lethal Injection,No,No,No,No,Augusta
07/31/1986,Michael Smith,40,m,Black,1 White Female(s),VA,S,Electrocution,No,No,No,No,James City County
07/20/1987,Willie Celestine,30,m,Black,1 White Female(s),LA,S,Electrocution,No,No,No,No,Lafayette Parish
07/24/1987,Willie Watson,31,m,Black,1 White Female(s),LA,S,Electrocution,No,No,No,No,St. Charles Parish
07/30/1987,John Brogdon,25,m,White,1 White Female(s),LA,S,Electrocution,No,No,No,No,St. Charles Parish
07/28/1988,James Messer,34,m,White,1 White Female(s),GA,S,Electrocution,No,No,No,No,Polk
07/14/1989,Horace Dunkins,28,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Jefferson
07/13/1990,Wallace Thomas,35,m,Black,1 White Female(s),AL,S,Electrocution,No,No,No,No,Jefferson
07/18/1990,Mikel Derrick,33,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
07/19/1990,Richard Boggs,27,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Portsmouth City
07/27/1990,Anthony Bertolotti,38,m,Black,1 White Female(s),FL,S,Electrocution,No,No,No,No,Osceola
07/24/1991,Albert Clozza,31,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Virginia Beach City
07/23/1992,Edward Fitzgerald,34,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Chesterfield
07/21/1993,Walter Blair,32,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Jackson
07/17/1996,Joseph Savino,37,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Bedford
07/31/1996,Emmet Nave,55,m,Native American,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Charles
07/17/1997,Roy Smith,50,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Pittsylvania
07/23/1997,Joseph O'Dell,55,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Virginia Beach City
07/29/1997,Robert West,35,m,Native American,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
07/14/1998,Thomas Thompson,43,m,White,1 White Female(s),CA,W,Lethal Injection,No,No,No,No,Orange
07/23/1998,Danny King,47,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Roanoke
07/20/2000,Gregg Braun,39,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Carter
07/26/2000,Juan Soria,33,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
07/17/2001,Jerald Harjo,40,m,Native American,1 Native American Female(s),OK,S,Lethal Injection,No,No,No,No,Seminole
07/17/2002,Tracy Hansen,39,m,White,1 White Male(s),MS,S,Lethal Injection,No,No,No,No,Chickasaw
07/30/2002,Earl Frederick,51,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,Yes,No,Oklahoma
07/22/2003,Bobby Swisher,27,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Augusta
07/23/2003,Cedric Ransom,29,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
07/24/2003,Jackie Willingham,33,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Comanche
07/24/2003,Allen Janecka,53,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/28/1987,Wayne Ritter,33,m,White,1 White Male(s),AL,S,Electrocution,No,No,No,No,Mobile
08/28/1987,Beauford White,41,m,Black,6 Black Male(s),FL,S,Electrocution,No,No,No,No,Miami-Dade
08/31/1990,George Gilmore,44,m,White,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
08/28/1987,Dale Selby,34,m,Black,1 White Male(s)2 White Female(s),UT,W,Lethal Injection,No,No,No,No,Weber
08/31/1993,Richard Wilkerson,29,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/21/1996,Richard Oxford,39,m,White,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Platte
08/30/2000,Russel Burkett,32,m,White,2 White Female(s),VA,S,Lethal Injection,No,No,No,No,Virginia Beach City
08/16/2001,Jeffrey Doughtie,39,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Nueces
08/28/2001,Jack Walker,35,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
08/30/2000,Jeffrey Caldwell,37,m,Black,1 Black Male(s)2 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
08/28/2002,Toronto Patterson,27,m,Black,3 Black Female(s),TX,S,Lethal Injection,Yes,No,No,No,Dallas
08/15/1995,Leon Moser,52,m,White,3 White Female(s),PA,N,Lethal Injection,No,No,Yes,No,Montgomery
08/30/2000,Gary Roll,47,m,White,2 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Boone
08/23/1991,Maurice Byrd,36,m,Black,1 White Male(s)3 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
08/18/1989,Herbert Richardson,43,m,Black,1 Black Female(s),AL,S,Electrocution,No,No,No,No,Houston
08/18/1995,Sylvester Adams,39,m,Black,1 Black Male(s),SC,S,Lethal Injection,No,No,No,No,York
08/26/1998,Genaro Ruiz Camacho,43,m,Latino,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
08/22/2003,William Jones,34,m,Black,1 Black Male(s),NC,S,Lethal Injection,No,No,No,No,Wake
08/24/1993,Ruben Cantu,26,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,Yes,No,No,No,Bexar
08/22/1996,Luis Mata,45,m,Latino,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
08/14/2002,Javier Medina,33,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,Yes,Dallas
08/20/1986,Randy Woolls,36,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tom Green
08/22/1986,Larry Smith,30,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,El Paso
08/26/1986,Chester Wicker,37,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Galveston
08/24/1987,Sterling Rault,36,m,White,1 White Female(s),LA,S,Electrocution,No,No,No,No,Orleans Parish
08/30/1989,Alton Waye,34,m,Black,1 White Male(s),VA,S,Electrocution,No,No,No,No,Brunswick
08/22/1991,Derick Peterson,30,m,Black,1 White Male(s),VA,S,Electrocution,No,No,No,No,Hampton City
08/20/1993,Carl Kelly,34,m,Black,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,McLennan
08/24/1993,David Mason,36,m,White,2 White Male(s)3 White Female(s),CA,W,Gas Chamber,No,No,Yes,No,Alameda
08/25/1993,Michael Durocher,33,m,White,1 White Female(s),FL,S,Electrocution,No,No,Yes,No,Clay
08/31/1993,Kenneth DeShields,33,m,Black,1 White Female(s),DE,S,Lethal Injection,No,No,No,No,Sussex
08/15/1995,Vernon Sattiewhite,39,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
08/31/1995,Barry Fairchild,41,m,Black,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Pulaski
08/13/1997,Donald Reese,54,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Jefferson
08/19/1997,Carlton Pope,35,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Portsmouth City
08/20/1997,Andrew Six,32,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Schuyler
08/14/1998,Zane Hill,62,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Buncombe
08/20/1998,Lance Chandler,25,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Halifax
08/31/1998,Johnile DuBois,31,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Fairfax
08/17/1999,Marlon Williams,26,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Chesapeake City
08/18/1999,Joseph Trevino,37,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
08/16/2000,John Satterwhite,53,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
08/22/2000,Richard Jones,40,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
08/23/2000,David Gibbs,39,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
08/25/2000,Dan Hauser,30,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,Yes,No,Okaloosa
08/24/2001,Clifton White,43,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Mecklenburg
08/28/2001,James Elledge,58,m,White,1 White Female(s),WA,W,Lethal Injection,No,No,Yes,No,Snohomish
08/31/2001,Ronald Frye,42,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Catawba
08/14/2002,Daniel Basile,35,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Charles
08/16/2002,Wallace Fugate,52,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Putnam
08/20/2002,Gary Etheridge,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazoria
08/23/2002,Anthony Green,37,m,Black,1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Charleston
09/15/1992,Willie Jones,34,m,Black,1 Black Male(s)1 Black Female(s),VA,S,Electrocution,No,No,No,No,Charles City
09/22/1992,James Demouchette,37,m,Black,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/20/1994,George Lott,47,m,White,2 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Potter
09/25/1997,Benjamin Stone,45,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Nueces
09/23/1998,Kenneth Stewart,44,m,White,1 White Male(s)1 White Female(s),VA,S,Electrocution,No,No,No,No,Bedford
09/24/2002,Rex Mays,42,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/25/1998,Sammy Roberts,40,m,White,2 White Male(s)1 Black Female(s),SC,S,Lethal Injection,No,No,No,No,Berkeley
09/22/1995,Phillip Ingle,34,m,White,1 White Female(s)1 White Male(s),NC,S,Lethal Injection,No,No,Yes,No,Rutherford
09/18/1996,Raymond Stewart,44,m,Black,1 White Male(s)2 Black Male(s),IL,M,Lethal Injection,No,No,No,No,Winnebago
09/20/1984,James Henry,34,m,Black,1 Black Male(s),FL,S,Electrocution,No,No,No,No,Orange
09/19/1995,Carl Johnson,40,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/24/1997,Samuel McDonald,48,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
09/14/1999,William Davis,42,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/13/2000,George Harris,41,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,Jackson
09/25/2002,Calvin King,48,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
09/23/1998,David Castillo,34,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Hidalgo
09/18/2001,James Knox,50,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Galveston
09/19/1986,John Rook,27,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Wake
09/21/1987,Timothy McCorquodale,35,m,White,1 White Female(s),GA,S,Electrocution,No,No,No,No,Fulton
09/20/1989,James Paster,44,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/21/1990,James Hamblen,61,m,White,1 White Female(s),FL,S,Electrocution,No,No,No,No,Duval
09/19/1991,James Russell,42,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Fort Bend
09/25/1991,Warren McCleskey,44,m,Black,1 White Male(s),GA,S,Electrocution,No,No,No,No,Fulton
09/14/1993,Joseph Wise,31,m,Black,1 White Male(s),VA,S,Electrocution,No,No,No,No,Mecklenburg
09/28/1993,Antonio Bonham,33,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/16/1994,Jessie Gutierrez,29,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
09/13/1995,Jimmie Jeffers,49,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Pima
09/20/1995,Charles Albanese,58,m,White,1 White Female(s),IL,M,Lethal Injection,No,No,No,No,McHenry
09/27/1995,Dennis Stockton,54,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Patrick
09/18/1996,Joe Gonzales,36,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Potter
09/17/1997,Mario Murphy,25,m,Latino,1 White Male(s),VA,S,Lethal Injection,No,No,No,Yes,Virginia Beach City
09/22/1997,Jessel Turner,37,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/30/1997,Johnny Cockrum,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bowie
09/16/1999,Everett Mueller,51,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Chesterfield
09/21/1999,Richard Smith,43,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
09/24/1999,Willie Sullivan,28,m,Black,1 White Male(s),DE,S,Lethal Injection,No,No,No,No,Kent
09/24/1999,Harvey Green,38,m,Black,1 White Male(s)1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Pitt
09/14/2000,Derek Barnabei,33,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Norfolk City
09/27/2000,Ricky McGinn,43,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brown
10/03/2001,Michael Roberts,27,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
09/13/2002,Michael Passaro,40,m,White,1 White Female(s),SC,S,Lethal Injection,No,No,Yes,No,Horry
09/17/2002,Jessie Patrick,44,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
09/18/2002,Ronald Shamburger,30,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
09/25/2002,Robert Buell,62,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Wayne
09/10/2003,Larry Hayes,54,m,White,1 White Female(s)1 Black Female(s),TX,S,Lethal Injection,No,No,Yes,No,Montgomery
09/12/2003,Henry Hunt,58,m,Native American,2 Native American Male(s),NC,S,Lethal Injection,No,No,No,No,Robeson
09/26/2003,Joseph Bates,35,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Yadkin
10/03/2003,Edward Hartman,39,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Northampton
10/29/2003,John Smith,42,m,White,1 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,Yes,No,Audrain
11/04/2003,James Brown,55,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Gwinnett
11/07/2003,Joseph Keel,39,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Edgecombe
11/14/2003,John Daniels,46,m,Black,1 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Mecklenburg
11/20/2003,Robert Henry,41,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,San Patricio
12/03/2003,Richard Duncan,61,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/04/2003,Ivan Murphy,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Grayson
12/05/2003,Robbie Lyons,31,m,Black,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Forsyth
01/06/2004,Ynobe Matthews,27,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Brazos
01/06/2004,Charles Singleton,44,m,Black,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Ashley
01/09/2004,Raymond Rowsey,32,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Alamance
01/13/2004,Tyrone Darks,39,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Cleveland
01/14/2004,Lewis Williams,45,m,Black,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
01/14/2004,Kenneth Bruce,32,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Collin
01/21/2004,Kevin Zimmerman,42,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
01/28/2004,Billy Vickers,58,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Lamar
02/03/2004,John Roe,41,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Franklin
02/04/2004,Johnny Robinson,51,m,Black,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,St. Johns
02/11/2004,Edward Lagrone,46,m,Black,3 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
02/12/2004,Bobby Hopkins,36,m,Black,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Johnson
02/17/2004,Norman Cleary,38,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
02/17/2004,Cameron Willingham,36,m,White,3 White Female(s),TX,S,Lethal Injection,No,No,No,No,Navarro
03/03/2004,Marcus Cotton,29,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/09/2004,David Brown,49,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Grady
03/18/2004,Brian Cherrix,30,m,White,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Accomack
03/19/2004,David Hill,39,m,White,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Georgetown
03/23/2004,Hung Thanh Le,37,m,Asian,1 Asian Male(s),OK,S,Lethal Injection,No,No,No,Yes,Oklahoma
03/26/2004,Lawrence Colwell,35,m,White,1 White Male(s),NV,W,Lethal Injection,No,No,Yes,No,Clark
03/30/2004,William Wickline,52,m,White,1 White Male(s)1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Franklin
03/31/2004,Dennis Orbe,39,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,York
04/16/2004,Jerry McWee,51,m,White,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Aiken
04/23/2004,Jason Byram,38,m,White,1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Richland
05/18/2004,Kelsey Patterson,50,m,Black,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Anderson
05/26/2004,John Blackwelder,49,m,White,1 White Male(s),FL,S,Lethal Injection,No,No,Yes,No,Columbia
05/28/2004,James Tucker,47,m,White,2 White Female(s),SC,S,Electrocution,No,No,No,No,Calhoun
06/08/2004,William Zuern,45,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
06/08/2004,Robert Bryan,63,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Beckham
06/17/2004,Steven Oken,42,m,White,1 White Female(s),MD,S,Lethal Injection,No,No,No,No,Baltimore
06/30/2004,David Harris,43,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
07/01/2004,Robert Hicks,47,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Spalding
07/14/2004,Stephen Vrabel,47,m,White,2 White Female(s),OH,M,Lethal Injection,No,No,Yes,No,Mahoning
07/19/2004,Eddie Crawford,57,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Spalding
07/20/2004,Scott Mink,40,m,White,1 White Male(s)1 White Female(s),OH,M,Lethal Injection,No,No,Yes,No,Montgomery
07/22/2004,Mark Bailey,34,m,White,1 White Male(s)1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Hampton City
08/05/2004,James Hubbard,74,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Tuscaloosa
08/12/2004,Terry Dennis,56,m,White,1 White Female(s),NV,W,Lethal Injection,No,No,Yes,No,Washoe
08/18/2004,James Hudson,57,m,White,2 White Male(s)1 White Female(s),VA,S,Lethal Injection,No,No,Yes,No,Halifax
08/25/2004,Jasen Busby,28,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Cherokee
08/26/2004,Windel Workman,46,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
08/26/2004,James Allridge,41,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
09/09/2004,James Reid,58,m,Black,1 Black Female(s),VA,S,Lethal Injection,No,No,No,No,Montgomery
09/21/2004,Andrew Flores,32,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
09/30/2004,David Hocker,33,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,Yes,No,Henry
10/05/2004,Edward Green,30,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
10/06/2004,Peter Miniel,42,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
10/08/2004,Sammy Perkins,51,m,Black,1 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Pitt
10/12/2004,Donald Aldrich,39,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Kerr
10/13/2004,Adremy Dennis,28,m,Black,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Summit
10/20/2004,Ricky Morrow,53,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
10/22/2004,Charles Roache,30,m,White,2 White Female(s),NC,S,Lethal Injection,No,No,Yes,No,Haywood
10/26/2004,Dominique Green,30,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/02/2004,Lorenzo Morris,52,m,Black,1 Black,TX,S,Lethal Injection,No,No,No,No,Harris
11/04/2004,Robert Morrow,47,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Liberty
11/09/2004,Demarco McCullum,30,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/10/2004,Frederick McWilliams,30,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/12/2004,Frank Chandler,32,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Surry
11/17/2004,Anthony Fuentes,30,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
01/04/2005,James Porter,33,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,Yes,No,Bowie
01/19/2005,Donald Beardslee,61,m,White,2 White Female(s),CA,W,Lethal Injection,No,No,No,No,San Mateo
01/25/2005,Troy Kunkle,38,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Nueces
01/25/2005,Timothy Carr,34,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Monroe
02/17/2005,Dennis Bagwell,41,m,White,4 White Female(s),TX,S,Lethal Injection,No,No,No,No,Atascosa
03/01/2005,Stephen Mobley,39,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Hall
03/08/2005,William Smith,47,m,Black,1 Black Female(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
03/08/2005,George Hopper,50,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
03/10/2005,Donald Wallace,47,m,White,2 White Male(s)2 White Female(s),IN,M,Lethal Injection,No,No,No,No,Vigo
03/11/2005,William Powell,58,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Cleveland
03/15/2005,Jimmy Slaughter,57,m,White,2 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
03/16/2005,Stanley Hall,37,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
04/05/2005,Glen Ocha,47,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,Yes,No,Osceola
04/15/2005,Richard Longworth,36,m,White,2 White Male(s),SC,S,Lethal Injection,No,No,No,No,Spartanburg
04/20/2005,Douglas Roberts,42,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/21/2005,Bill Benefiel,48,m,White,1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Vigo
04/27/2005,Donald Jones,38,m,Black,1 Black Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
04/28/2005,Mario Centobie,39,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,Yes,No,St. Clair
05/03/2005,Lonnie Pursley,43,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Polk
05/06/2005,Earl Richmond,43,m,Black,1 Black Male(s)2 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Cumberland
05/13/2005,Michael Ross,45,m,White,4 White Female(s),CT,N,Lethal Injection,No,No,Yes,No,New London
05/12/2005,George Miller,37,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
05/18/2005,Vernon Brown,51,m,Black,1 Black Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
05/18/2005,Bryan Wolfe,44,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
05/19/2005,Richard Cartwright,31,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Nueces
05/25/2005,Gregory Johnson,40,m,White,1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Madison
06/02/2005,Jerry Henderson,58,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Talladega
06/07/2005,Alexander Martinez,28,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Harris
07/12/2005,Robert Conklin,44,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Fulton
07/19/2005,Michael Pennington,37,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Comanche
07/27/2005,Kevin Conner,38,m,White,3 White Male(s),IN,M,Lethal Injection,No,No,Yes,No,Marion
07/28/2005,David Martinez,29,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Travis
08/04/2005,George Sibley,62,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Lee
08/10/2005,Gary Sterling,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Navarro
08/11/2005,Kenneth Turrentine,52,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
08/23/2005,Robert Shields,30,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Galveston
08/31/2005,Timothy Johnston,44,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
09/14/2005,Frances Newton,40,f,Black,2 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/22/2005,John Peoples,48,m,White,1 White Female(s)2 White Male(s),AL,S,Lethal Injection,No,No,No,No,Talladega
09/27/2005,Herman Ashworth,32,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,Yes,No,Licking
09/28/2005,Alan Matheney,54,m,White,1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Lake
10/06/2005,Ronald Howard,32,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Travis
10/20/2005,Luis Ramirez,42,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Tom Green
10/25/2005,William Williams,48,m,Black,3 White Male(s)1 Black Female(s),OH,M,Lethal Injection,No,No,No,No,Summit
10/26/2005,Marlin Gray,38,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
11/03/2005,Melvin White,55,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Pecos
11/04/2005,Brian Steckel,36,m,White,1 White Female(s),DE,S,Lethal Injection,No,No,No,No,New Castle
11/04/2005,Arthur Wise,51,m,Black,3 White Male(s)1 White Female(s),SC,S,Lethal Injection,No,No,Yes,No,Aiken
11/09/2005,Charles Thacker,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/11/2005,Steven McHone,35,m,White,1 White Male(s)1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Surry
11/15/2005,Robert Rowell,50,m,White,1 Latino Male(s)1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/16/2005,Shannon Thomas,34,m,Black,2 Latino Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/18/2005,Elias Syriani,67,m,White,1 Other Female(s),NC,S,Lethal Injection,No,No,No,No,Mecklenburg
11/28/2005,Eric Nance,45,m,White,1 White Female(s),AR,S,Lethal Injection,No,No,No,No,Hot Spring
11/29/2005,John Hicks,49,m,Black,2 Black Female(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
12/02/2005,Kenneth Boyd,57,m,White,1 White Male(s)1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Rockingham
12/02/2005,Shawn Humphries,33,m,White,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Greenville
12/05/2005,Wesley Baker,47,m,Black,1 White Female(s),MD,S,Lethal Injection,No,No,No,No,Harford
12/13/2005,Stanley Williams,51,m,Black,1 White Male(s)1 Asian Male(s)2 Asian Female(s),CA,W,Lethal Injection,No,No,No,No,Los Angeles
12/14/2005,John Nixon,77,m,White,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Rankin
01/17/2006,Clarence Allen,76,m,Native American,2 White Male(s)1 White Female(s),CA,W,Lethal Injection,No,No,No,No,Glenn
01/20/2006,Perrie Simpson,43,m,Black,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Rockingham
01/25/2006,Marion Dudley,33,m,Black,2 Latino Male(s)1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
01/27/2006,Marvin Bieghler,58,m,White,1 White Male(s)1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Howard
01/31/2006,Jaime Elizalde,34,m,Latino,2 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/07/2006,Glenn Benner,43,m,White,2 White Female(s),OH,M,Lethal Injection,No,No,No,No,Summit
02/08/2006,Robert Neville,31,m,White,1 Native American Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
02/15/2006,Clyde Smith,32,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/15/2006,Tommie Hughes,31,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
03/17/2006,Patrick Moody,39,m,White,1 White Male(s),NC,S,Lethal Injection,No,No,No,No,Davidson
03/22/2006,Robert Salazar,27,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
03/29/2006,Kevin Kincy,38,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/18/2006,Richard Thornburg,40,m,White,3 White Male(s),OK,S,Lethal Injection,No,No,No,No,Grady
04/21/2006,Willie Brown,61,m,Black,1 Black Female(s),NC,S,Lethal Injection,No,No,No,No,Martin
04/26/2006,Daryl Mack,47,m,Black,1 White Female(s),NV,W,Lethal Injection,No,No,Yes,No,Washoe
04/27/2006,Dexter Vinson,43,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Portsmouth City
05/02/2006,Joseph Clark,57,m,Black,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Lucas
05/04/2006,Jackie Wilson,40,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
05/17/2006,Jermaine Herron,27,m,Black,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Refugio
05/24/2006,Jesus Aguilar,42,m,Latino,1 Latino Male(s)1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Cameron
06/01/2006,John Boltz,74,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Pottawatomie
06/06/2006,Timothy Titsworth,34,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Randall
06/20/2006,Lamont Reese,28,m,Black,3 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
06/27/2006,Angel Resendiz,46,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,Yes,Harris
06/28/2006,Sedley Alley,51,m,White,1 White Female(s),TN,S,Lethal Injection,No,No,No,No,Shelby
07/11/2006,Derrick O'Brien,31,m,Black,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
07/12/2006,Rocky Barton,49,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,Yes,No,Warren
07/14/2006,William Downs,39,m,White,1 Black Male(s),SC,S,Lethal Injection,No,No,Yes,No,Aiken
07/19/2006,Mauriceo Brown,31,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
07/20/2006,Robert Anderson,40,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Potter
07/20/2006,Brandon Hedrick,27,m,White,1 Black Female(s),VA,S,Electrocution,No,No,No,No,Appomattox
07/27/2006,Michael Lenz,42,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Augusta
08/03/2006,William Wyatt,41,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Bowie
08/08/2006,Darrell Ferguson,28,m,White,1 White Male(s)2 White Female(s),OH,M,Lethal Injection,No,No,Yes,No,Montgomery
08/11/2006,David Dawson,49,m,White,2 White Male(s)1 White Female(s),MT,W,Lethal Injection,No,No,Yes,No,Yellowstone
08/17/2006,Richard Hinojosa,45,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
08/18/2006,Samuel Flippen,37,m,White,1 White Female(s),NC,S,Lethal Injection,No,No,No,No,Forsyth
08/24/2006,Justin Fuller,27,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Smith
08/29/2006,Eric Patton,49,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
08/31/2006,James Malicoat,31,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Grady
08/31/2006,Derrick Frazier,29,m,Black,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Refugio
09/12/2006,Farley Matchett,43,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/20/2006,Clarence Hill,48,m,Black,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Escambia
10/18/2006,Arthur Rutherford,57,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Santa Rosa
10/18/2006,Bobby Wilcher,43,m,White,2 White Female(s),MS,S,Lethal Injection,No,No,No,No,Scott
10/24/2006,Jeffrey Lundgren,56,m,White,1 White Male(s)4 White Female(s),OH,M,Lethal Injection,No,No,No,No,Lake
10/25/2006,Danny Rolling,52,m,White,1 Latino Male(s)4 White Female(s),FL,S,Lethal Injection,No,No,No,No,Alachua
10/25/2006,Gregory Summers,48,m,White,2 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Denton
10/26/2006,Larry Hutcherson,37,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Mobile
11/01/2006,Donell Jackson,33,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/08/2006,Willie Shannon,33,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/09/2006,John Schmitt,33,m,White,1 Black Male(s),VA,S,Lethal Injection,No,No,No,No,Chesterfield
12/13/2006,Angel Diaz,55,m,Latino,1 White Male(s),FL,S,Lethal Injection,No,No,No,Yes,Miami-Dade
01/09/2007,Corey Hamilton,38,m,Black,3 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
01/10/2007,Carlos Granados,36,m,Latino,1 Latino Female(s)1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Williamson
01/17/2007,Jonathan Moore,33,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
01/30/2007,Christopher Swift,31,m,White,2 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Denton
02/07/2007,James Jackson,47,m,Black,3 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/22/2007,Newton Anderson,30,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Smith
02/27/2007,Donald Miller,44,m,White,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/06/2007,Robert Perez,48,m,Latino,2 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
03/07/2007,Joseph Nichols,45,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/20/2007,Charles Nealy,42,m,Black,1 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
03/28/2007,Vincent Gutierrez,28,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
03/29/2007,Roy Pippin,51,m,White,2 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/11/2007,James Clark,38,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Denton
04/24/2007,James Filiaggi,41,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Lorain
04/26/2007,Ryan Dickson,30,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Potter
05/03/2007,Aaron Jones,55,m,Black,1 White Male(s)1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Blount
05/04/2007,David Woods,42,m,White,1 Latino Male(s),IN,M,Lethal Injection,No,No,No,No,Delaware
05/09/2007,Philip Workman,53,m,White,1 White Male(s),TN,S,Lethal Injection,No,No,No,No,Shelby
05/16/2007,Charles Smith,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Pecos
05/22/2007,Robert Comer,50,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,Yes,No,Maricopa
05/24/2007,Christopher Newton,37,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,Yes,No,Richland
06/06/2007,Michael Griffith,56,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/15/2007,Michael Lambert,36,m,White,1 White Male(s),IN,M,Lethal Injection,No,No,No,No,Delaware
06/20/2007,Lionell Rodriguez,36,m,Latino,1 Asian Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/21/2007,Gilberto Reyes,33,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bailey
06/22/2007,Calvin Shuler,40,m,Black,1 White Male(s),SC,S,Lethal Injection,No,No,No,No,Dorchester
06/26/2007,Jimmy Bland,49,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Tillman
06/26/2007,Patrick Knight,39,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Randall
06/26/2007,John Hightower,63,m,Black,3 Black Female(s),GA,S,Lethal Injection,No,No,No,No,Morgan
07/11/2007,Elijah Page,25,m,White,1 White Male(s),SD,M,Lethal Injection,No,No,Yes,No,Lawrence
07/24/2007,Lonnie Johnson,44,m,Black,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
07/26/2007,Darrell Grayson,46,m,Black,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Shelby
08/15/2007,Kenneth Parr,27,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Matagorda
08/21/2007,Frank Welch,46,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Garvin
08/22/2007,Johnny Conner,32,m,Black,1 Asian Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/23/2007,Luther Williams,47,m,Black,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Tuscaloosa
08/28/2007,DaRoyce Mosley,32,m,Black,3 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Gregg
08/29/2007,John Amador,32,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
09/05/2007,Tony Roach,30,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Potter
09/12/2007,Daryl Holton,45,m,White,3 White Male(s)1 Black Female(s),TN,S,Electrocution,No,No,Yes,No,Bedford
09/20/2007,Clifford Kimmel,32,m,White,1 White Male(s)2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
09/25/2007,Michael Richard,49,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/06/2008,William Lynd,53,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Chatham
05/21/2008,Earl Berry,49,m,White,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Chickasaw
05/27/2008,Kevin Green,31,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Brunswick
06/04/2008,Curtis Osborne,37,m,Black,1 Black Male(s)1 Black Female(s),GA,S,Lethal Injection,No,No,No,No,Spalding
06/06/2008,David Hill,48,m,White,1 White Male(s)1 Black Female(s)1 White Female(s),SC,S,Lethal Injection,No,No,Yes,No,Aiken
06/11/2008,Karl Chamberlain,37,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/17/2008,Terry Short,47,m,White,1 Asian Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
06/20/2008,James Reed,49,m,Black,1 Black Male(s)1 Black Female(s),SC,S,Electrocution,No,No,No,No,Charleston
06/25/2008,Robert Yarbrough,30,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Mecklenburg
07/01/2008,Mark Schwab,39,m,White,1 Latino Male(s),FL,S,Lethal Injection,No,No,No,No,Brevard
07/10/2008,Carlton Turner,29,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
07/10/2008,Kent Jackson,26,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,King George
07/23/2008,Dale Bishop,34,m,White,1 White Male(s),MS,S,Lethal Injection,No,No,No,No,Lee
07/23/2008,Derrick Sonnier,40,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
07/24/2008,Christopher Emmett,36,m,White,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Danville City
07/31/2008,Larry Davis,40,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Potter
08/05/2008,Jose Medellin,33,m,Latino,2 White Female(s),TX,S,Lethal Injection,No,No,No,Yes,Harris
08/12/2008,Leon Dorsey,32,m,Black,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
09/16/2008,Jack Alderman,57,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Chatham
09/17/2008,William Murray,39,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Kaufman
08/14/2008,Michael Rodriguez,45,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Dallas
09/23/2008,Richard Henyard,34,m,Black,2 Black Female(s),FL,S,Lethal Injection,No,No,No,No,Lake
09/25/2008,Jessie Cummings,52,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Coal
10/14/2008,Richard Cooey,41,m,White,2 White Female(s),OH,M,Lethal Injection,No,No,No,No,Summit
10/14/2008,Alvin Kelly,57,m,White,2 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Gregg
10/16/2008,Kevin Watts,27,m,Black,1 Asian Male(s)2 Asian Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
10/21/2008,Joseph Ries,29,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hopkins
10/28/2008,Eric Nenno,47,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
08/07/2008,Heliberto Chi,29,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,Yes,Tarrant
11/06/2008,Elkie Taylor,46,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
11/12/2008,George Whitaker,36,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
10/30/2008,Gregory Wright,42,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
11/13/2008,Denard Manns,42,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bell
11/19/2008,Gregory Bryant-Bey,53,m,Black,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Lucas
11/20/2008,Robert Hudson,45,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
11/21/2008,Marco Chapman,37,m,White,1 White Male(s)1 White Female(s),KY,S,Lethal Injection,No,No,Yes,No,Fayette
12/05/2008,Joseph Gardner,38,m,Black,1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Dorchester
02/19/2009,Edward Bell,44,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,Yes,Frederick
01/14/2009,Curtis Moore,40,m,Black,2 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
01/15/2009,James Callahan,62,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Calhoun
01/21/2009,Frank Moore,49,m,Black,2 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
01/22/2009,Darwin Brown,32,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
01/22/2009,Reginald Perkins,53,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
01/28/2009,Virgil Martinez,41,m,Latino,2 Latino Male(s)2 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Brazoria
01/29/2009,Ricardo Ortiz,46,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,El Paso
02/04/2009,Steve Henley,55,m,White,1 White Male(s)1 White Female(s),TN,S,Lethal Injection,No,No,No,No,Jackson
02/04/2009,David Martinez,36,m,Latino,1 Latino Male(s)1 Latino Female(s),TX,S,Lethal Injection,No,No,Yes,No,Bexar
02/10/2009,Dale Scheanette,35,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
02/11/2009,Wayne Tompkins,51,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Hillsborough
02/12/2009,Danny Bradley,49,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Calhoun
02/12/2009,Johnny Johnson,51,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/20/2009,Luke Williams,56,m,White,1 White Male(s)1 White Female(s),SC,S,Lethal Injection,No,No,No,No,Edgefield
03/03/2009,Willie Pondexter,34,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Red River
03/04/2009,Kenneth Morris,38,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/10/2009,James Martinez,34,m,Latino,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
03/10/2009,Robert Newland,65,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Glynn
03/11/2009,Luis Salazar,38,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
04/15/2009,Michael Rosales,35,m,Latino,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
04/16/2009,Jimmy Dill,49,m,Black,1 Black Male(s),AL,S,Lethal Injection,No,No,No,No,Jefferson
04/29/2009,William Mize,52,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Oconee
04/30/2009,Derrick Johnson,28,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
05/08/2009,Thomas Ivey,34,m,Black,2 White Male(s),SC,S,Lethal Injection,No,No,No,No,Orangeburg
05/14/2009,Willie McNair,44,m,Black,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Montgomery
05/14/2009,Donald Gilson,48,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Cleveland
05/19/2009,Michael Riley,51,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Wood
05/20/2009,Dennis Skillicorn,49,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Lafayette
06/02/2009,Terry Hankins,34,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
06/03/2009,Daniel Wilson,39,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Lorain
06/11/2009,Jack Trawick,62,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,Yes,No,Jefferson
07/09/2009,Michael DeLozier,32,m,White,2 White Male(s),OK,S,Lethal Injection,No,No,No,No,McCurtain
07/14/2009,John Fautenberry,45,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
07/21/2009,Marvallous Keene,36,m,Black,1 Black Female(s)2 White Female(s)2 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Montgomery
08/18/2009,Jason Getsy,33,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Trumbull
08/19/2009,John Marek,45,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Broward
09/16/2009,Stephen Moody,52,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/22/2009,Christopher Coleman,37,m,Black,3 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
10/08/2009,Max Payne,38,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Cullman
10/20/2009,Mark McClain,42,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Richmond
10/27/2009,Reginald Blanton,28,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
11/05/2009,Khristian Oliver,32,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Nacogdoches
11/10/2009,Yosvanis Valle,34,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,Yes,Harris
11/10/2009,John Muhammad,48,m,Black,1 White Male(s),VA,S,Lethal Injection,No,No,No,No,Prince William
11/17/2009,Larry Elliott,60,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Prince William
11/18/2009,Danielle Simpson,30,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Anderson
11/19/2009,Robert Thompson,34,m,Black,1 Other Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/02/2009,Cecil Johnson,53,m,Black,3 Black Male(s),TN,S,Lethal Injection,No,No,No,No,Davidson
12/03/2009,Bobby Woods,44,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Llano
12/08/2009,Kenneth Biros,51,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Trumbull
12/11/2009,Matthew Wrinkles,49,m,White,2 White Male(s)1 White Female(s),IN,M,Lethal Injection,No,No,No,No,Vanderburgh
01/07/2010,Vernon Smith,37,m,Black,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Lucas
01/07/2010,Kenneth Mosley,51,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
01/07/2010,Gerald Bordelon,47,m,White,1 White Female(s),LA,S,Lethal Injection,No,No,Yes,No,Livingston Parish
01/12/2010,Gary Johnson,59,m,White,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Walker
01/14/2010,Julius Young,60,m,Black,1 Black Male(s)1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
02/04/2010,Mark Brown,37,m,Black,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Mahoning
02/16/2010,Martin Grossman,45,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pinellas
03/02/2010,Michael Sigala,32,m,Latino,1 Latino Male(s)1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Collin
03/11/2010,Joshua Maxwell,31,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
03/16/2010,Lawrence Reynolds,43,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Summit
03/18/2010,Paul Powell,31,m,White,1 White Female(s),VA,S,Electrocution,No,No,No,No,Prince William
03/30/2010,Franklin Alix,34,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
04/20/2010,Darryl Durr,46,m,Black,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
04/22/2010,William Berkley,31,m,White,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,El Paso
04/27/2010,Samuel Bustamante,40,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Fort Bend
05/12/2010,Kevin Varga,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hunt
05/13/2010,Michael Beuke,48,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
05/13/2010,Billy Galloway,41,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hunt
05/19/2010,Rogelio Cannady,37,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bee County
05/19/2010,Paul Woodward,62,m,White,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Perry
05/20/2010,Gerald Holland,72,m,White,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Chickasaw
05/20/2010,Darick Walker,37,m,Black,2 Black Male(s),VA,S,Lethal Injection,No,No,No,No,Henrico
05/25/2010,John Alba,54,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Collin
05/27/2010,Thomas Whisenhant,63,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Mobile
06/02/2010,George Jones,36,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/09/2010,Melbert Ford,49,m,White,2 White Female(s),GA,S,Lethal Injection,No,No,No,No,Newton
06/10/2010,John Parker,42,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Colbert
06/15/2010,David Powell,59,m,White,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Travis
06/18/2010,Ronnie Gardner,49,m,White,1 White Male(s),UT,W,Firing Squad,No,No,No,No,Salt Lake
07/01/2010,Michael Perry,28,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
07/13/2010,William Garner,37,m,Black,1 Black Male(s)4 Black Female(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
07/20/2010,Derrick Jackson,42,m,Black,2 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
07/21/2010,Joseph Burns,42,m,White,1 White Male(s),MS,S,Lethal Injection,No,No,No,No,Lee
08/10/2010,Roderick Davie,38,m,Black,1 White Female(s)1 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Trumbull
08/12/2010,Michael Land,41,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Jefferson
08/17/2010,Peter Cantu,35,m,Latino,2 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/09/2010,Holly Wood,50,m,Black,1 Black Female(s),AL,S,Lethal Injection,No,No,No,No,Pike
09/10/2010,Cal Brown,52,m,White,1 White Female(s),WA,W,Lethal Injection,No,No,No,No,King
09/23/2010,Teresa Lewis,41,f,White,2 White Male(s),VA,S,Lethal Injection,No,No,No,No,Pittsylvania
09/27/2010,Brandon Rhode,31,m,White,2 White Male(s)1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Jones
10/06/2010,Michael Benge,49,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Butler
10/14/2010,Donald Wackerly,41,m,White,1 Asian Male(s),OK,S,Lethal Injection,No,No,No,No,Sequoyah
10/21/2010,Larry Wooten,51,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Lamar
10/26/2010,Jeffrey Landrigan,50,m,Native American,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
11/04/2010,Phillip Hallford,63,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,No,No,Dale
12/16/2010,John Duty,58,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Pittsburg
01/06/2011,Billy Alverson,39,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
01/11/2011,Jeffrey Matthews,38,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Cleveland
01/13/2011,Leroy White,52,m,Black,1 Black Female(s),AL,S,Lethal Injection,No,No,No,No,Madison
01/25/2011,Emmanuel Hammond,45,m,Black,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Fulton
02/09/2011,Martin Link,47,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
02/15/2011,Michael Hall,31,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
02/17/2011,Frank Spisak,59,m,White,1 White Male(s)2 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
02/22/2011,Timothy Adams,42,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/10/2011,Johnnie Baston,37,m,Black,1 Asian Male(s),OH,M,Lethal Injection,No,No,No,No,Lucas
03/29/2011,Eric King,47,m,Black,2 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
03/31/2011,William Boyd,45,m,White,1 White Male(s)1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Calhoun
04/12/2011,Clarence Carter,49,m,Black,1 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
05/03/2011,Cary Kerr,46,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
05/06/2011,Jeffrey Motts,36,m,White,1 White Male(s),SC,S,Lethal Injection,No,No,Yes,No,Greenville
05/10/2011,Benny Stevens,52,m,White,3 White Male(s)1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Marion
05/17/2011,Daniel Bedford,63,m,White,1 White Female(s)1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Hamilton
05/17/2011,Rodney Gray,39,m,Black,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Newton
05/19/2011,Jason Williams,42,m,White,3 White Male(s)1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Mobile
05/25/2011,Donald Beaty,56,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
06/01/2011,Gayland Bradford,42,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
06/16/2011,Eddie Powell,41,m,Black,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Tuscaloosa
06/16/2011,Lee Taylor,32,m,White,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Bowie
06/21/2011,Milton Mathis,32,m,Black,1 Black Male(s)1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Fort Bend
06/23/2011,Roy Blankenship,55,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Chatham
06/30/2011,Richard Bible,49,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Coconino
07/07/2011,Humberto Leal,38,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,Yes,Bexar
07/19/2011,Thomas West,52,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Pima
07/20/2011,Mark Stroman,41,m,White,1 Asian Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
07/21/2011,Andrew DeYoung,37,m,White,1 White Male(s)2 White Female(s),GA,S,Lethal Injection,No,No,No,No,Cobb
07/29/2011,Robert Jackson,38,m,White,1 White Female(s),DE,S,Lethal Injection,No,No,No,No,New Castle
08/10/2011,Martin Robles,33,m,Latino,2 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Nueces
08/18/2011,Jerry Jackson,30,m,Black,1 White Female(s),VA,S,Lethal Injection,No,No,No,No,Williamsburg City
09/13/2011,Steven Woods,31,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Denton
09/21/2011,Troy Davis,41,m,Black,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Chatham
09/21/2011,Lawrence Brewer,44,m,White,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Jasper
09/22/2011,Derrick Mason,37,m,Black,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Madison
09/28/2011,Manuel Valle,61,m,Latino,1 Latino Male(s),FL,S,Lethal Injection,No,No,No,Yes,Miami-Dade
10/20/2011,Christopher Johnson,38,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,Yes,No,Escambia
10/27/2011,Frank Garcia,39,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
11/15/2011,Reginald Brooks,66,m,Black,3 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
11/15/2011,Oba Chandler,65,m,White,3 White Female(s),FL,S,Lethal Injection,No,No,No,No,Hillsborough
11/16/2011,Guadalupe Esparza,46,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
11/18/2011,Paul Rhoades,54,m,White,2 White Female(s),ID,W,Lethal Injection,No,No,No,No,Bingham
01/05/2012,Gary Welch,49,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Ottawa
01/26/2012,Rodrigo Hernandez,39,m,Latino,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
02/08/2012,Edwin Turner,38,m,White,2 Black Male(s),MS,S,Lethal Injection,No,No,No,No,Forrest
02/15/2012,Robert Waterhouse,65,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pinellas
02/29/2012,Robert Moormann,63,m,White,1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Pinal
02/29/2012,George Rivas,41,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
03/07/2012,Keith Thurmond,52,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
03/08/2012,Robert Towery,47,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
03/15/2012,Timothy Stemple,46,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
03/20/2012,Larry Puckett,35,m,White,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Forrest
03/22/2012,William Mitchell,61,m,Black,1 White Female(s),MS,S,Lethal Injection,No,No,No,No,Harrison
03/28/2012,Jesse Hernandez,47,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
04/12/2012,David Gore,58,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pinellas
04/18/2012,Mark Wiles,49,m,White,1 White Male(s),OH,M,Lethal Injection,No,No,No,No,Portage
04/20/2012,Shannon Johnson,28,m,Black,1 Black Male(s),DE,S,Lethal Injection,No,No,Yes,No,New Castle
04/25/2012,Thomas Kemp,63,m,White,1 Latino Male(s),AZ,W,Lethal Injection,No,No,No,No,Pima
04/26/2012,Beunka Adams,29,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Cherokee
05/01/2012,Michael Selsor,57,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
06/05/2012,Henry Jackson,47,m,Black,2 Black Male(s)2 Black Female(s),MS,S,Lethal Injection,No,No,No,No,Copiah
06/12/2012,Richard Leavitt,53,m,White,1 White Female(s),ID,W,Lethal Injection,No,No,No,No,Bingham
06/12/2012,Jan Brawner,34,m,White,3 White Female(s)1 White Male(s),MS,S,Lethal Injection,No,No,No,No,Tate
06/20/2012,Gary Simmons,49,m,White,1 White Male(s),MS,S,Lethal Injection,No,No,No,No,Jackson
06/27/2012,Samuel Lopez,49,m,Latino,1 Latino Female(s),AZ,W,Lethal Injection,No,No,No,No,Maricopa
07/18/2012,Yokamon Hearn,33,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
08/07/2012,Marvin Wilson,54,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
08/08/2012,Daniel Cook,51,m,White,1 White Male(s)1 Latino Male(s),AZ,W,Lethal Injection,No,No,No,No,Mohave
08/14/2012,Michael Hooper,40,m,White,2 White Female(s)1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Canadian
09/20/2012,Donald Palmer,47,m,White,2 White Male(s),OH,M,Lethal Injection,No,No,No,No,Belmont
09/20/2012,Robert Harris,40,m,Black,1 Latino Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
09/25/2012,Cleve Foster,47,m,White,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
10/10/2012,Jonathan Green,44,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Montgomery
10/15/2012,Eric Robert,50,m,White,1 White Male(s),SD,M,Lethal Injection,No,No,Yes,No,Minnehaha
10/24/2012,Bobby Hines,24,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
10/30/2012,Donald Moeller,60,m,White,1 White Female(s),SD,M,Lethal Injection,No,No,No,No,Minnehaha
10/31/2012,Donnie Roberts,41,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Polk
11/06/2012,Garry Allen,56,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
11/08/2012,Mario Swain,33,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Gregg
11/13/2012,Brett Hartman,38,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Summit
11/14/2012,Ramon Hernandez,41,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
11/15/2012,Preston Hughes,46,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
12/04/2012,George Ochoa,38,m,Latino,1 Latino Female(s)1 Latino Male(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
12/05/2012,Richard Stokley,60,m,White,2 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Cochise
12/11/2012,Manuel Pardo,56,m,Latino,5 Latino Male(s)3 Latino Female(s)1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Miami-Dade
01/16/2013,Robert Gleason,42,m,White,1 White Male(s)1 Black Male(s),VA,S,Electrocution,No,No,Yes,No,Wise
02/21/2013,Carl Blue,48,m,Black,1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Brazos
02/21/2013,Andrew Cook,38,m,White,1 White Female(s)1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Monroe
03/06/2013,Frederick Treesh,48,m,White,1 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Lake
03/12/2013,Ray Thacker,42,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Mayes
04/09/2013,Rickey Lewis,50,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Smith
04/10/2013,Larry Mann,59,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pinellas
04/16/2013,Ronnie Threadgill,40,m,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Navarro
04/25/2013,Richard Cobb,29,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Cherokee
05/01/2013,Steve Smith,46,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Richland
05/07/2013,Carroll Parr,35,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,McLennan
05/15/2013,Jeffery Williams,37,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
05/29/2013,Elmer Carroll,56,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Orange
06/12/2013,Elroy Chester,44,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Jefferson
06/12/2013,William Van Poyck,58,m,White,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Palm Beach
06/18/2013,James DeRosa,36,m,White,1 White Male(s)1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Le Flore
06/25/2013,Brian Davis,39,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Kay
06/26/2013,Kimberly McCarthy,52,f,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
07/16/2013,John Quintanilla,36,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Victoria
07/18/2013,Vaugn Ross,41,m,Black,1 White Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
07/25/2013,Andrew Lackey,29,m,White,1 White Male(s),AL,S,Lethal Injection,No,No,Yes,No,Limestone
07/31/2013,Douglas Feldman,55,m,White,1 White Male(s)1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
08/05/2013,John Ferguson,65,m,Black,6 Black Male(s)1 White Female(s)1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Miami-Dade
09/10/2013,Anthony Banks,60,m,Black,1 Asian Female(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
09/19/2013,Robert Garza,30,m,Latino,4 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/25/2013,Harry Mitts,61,m,White,1 White Male(s)1 Black Male(s),OH,M,Lethal Injection,No,No,No,No,Cuyahoga
09/26/2013,Arturo Diaz,37,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hidalgo
10/01/2013,Marshall Gore,50,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Columbia
10/09/2013,Edward Schad,71,m,White,1 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Yavapai
10/09/2013,Michael Yowell,43,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Lubbock
10/15/2013,William Happ,51,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,Yes,No,Lake
10/23/2013,Robert Jones,43,m,White,3 White Female(s)3 White Male(s),AZ,W,Lethal Injection,No,No,No,No,Pima
11/12/2013,Darius Kimbrough,40,m,Black,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Orange
11/12/2013,Jamie McCoskey,49,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
11/20/2013,Joseph Franklin,63,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis City
12/03/2013,Jerry Martin,43,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Leon
12/10/2013,Ronald Lott,53,m,Black,2 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
12/11/2013,Allen Nicklasson,41,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Lafayette
12/17/2013,Johnny Black,48,m,White,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Stephens
01/07/2014,Askari Muhammad,62,m,Black,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Bradford
01/09/2014,Michael Wilson,38,m,Black,1 White Male(s),OK,S,Lethal Injection,No,No,No,No,Tulsa
01/16/2014,Dennis McGuire,53,m,White,1 White Female(s),OH,M,Lethal Injection,No,No,No,No,Preble
01/22/2014,Edgar Tamayo,46,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,Yes,Harris
01/23/2014,Kenneth Hogan,52,m,White,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/29/2014,Herbert Smulls,56,m,Black,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
02/05/2014,Suzanne Basso,59,f,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
02/12/2014,Juan Chavez,46,m,Latino,1 White Male(s),FL,S,Lethal Injection,No,No,No,Yes,Miami-Dade
02/26/2014,Michael Taylor,47,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Jackson
02/26/2014,Paul Howell,48,m,Black,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Jefferson
03/19/2014,Ray Jasper,33,m,Black,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
03/20/2014,Robert Henry,55,m,Black,1 White Female(s)1 Black Female(s),FL,S,Lethal Injection,No,No,No,No,Broward
03/26/2014,Jeffrey Ferguson,59,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Charles
03/27/2014,Anthony Doyle,29,m,Black,1 Asian Female(s),TX,S,Lethal Injection,No,No,No,No,Dallas
04/03/2014,Tommy Sells,49,m,White,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Val Verde
04/09/2014,Ramiro Hernandez,44,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,Yes,Bandera
04/16/2014,Jose Villegas,39,m,Latino,1 Latino Male(s)2 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Nueces
04/23/2014,William Rousan,57,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Washington
04/23/2014,Robert Hendrix,47,m,White,1 White Male(s)1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Lake
04/29/2014,Clayton Lockett,38,m,Black,1 White Female(s),OK,S,Lethal Injection,No,No,No,No,Kay
06/17/2014,Marcus Wellons,58,m,Black,1 Black Female(s),GA,S,Lethal Injection,No,No,No,No,Cobb
06/18/2014,John Winfield,46,m,Black,2 Black Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
06/18/2014,John Henry,63,m,Black,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pasco
07/10/2014,Eddie Davis,45,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Polk
07/16/2014,John Middleton,54,m,White,2 White Male(s)1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Harrison
07/23/2014,Joseph Wood,55,m,White,1 White Male(s)1 White Female(s),AZ,W,Lethal Injection,No,No,No,No,Pima
08/06/2014,Michael Worthington,43,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Charles
09/10/2014,Earl Ringo,40,m,Black,1 White Female(s)1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Boone
09/10/2014,Willie Trottie,45,m,Black,1 Black Male(s)1 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
09/17/2014,Lisa Coleman,38,f,Black,1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Tarrant
10/28/2014,Miguel Paredes,32,m,Latino,1 Latino Female(s)1 Latino Male(s)1 White Male(s),TX,S,Lethal Injection,No,No,No,Yes,Bexar
11/13/2014,Chadwick Banks,43,m,Black,1 Black Female(s),FL,S,Lethal Injection,No,No,No,No,Leon
11/19/2014,Leon Taylor,56,m,Black,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Jackson
12/09/2014,Robert Holsey,49,m,Black,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Baldwin
12/10/2014,Paul Goodwin,48,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
01/13/2015,Andrew Brannan,66,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Laurens
06/03/2015,Lester Bower,67,m,White,4 White Male(s),TX,S,Lethal Injection,No,No,No,No,Grayson
01/15/2015,Johnny Kormondy,42,m,White,1 White Male(s),FL,S,Lethal Injection,No,No,No,No,Escambia
01/15/2015,Charles Warner,47,m,Black,1 Black Female(s),OK,S,Lethal Injection,No,No,No,No,Oklahoma
01/21/2015,Arnold Prieto,41,m,Latino,1 Latino Male(s)1 Latino Female(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
01/27/2015,Warren Hill,54,m,Black,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Lee
01/29/2015,Robert Ladd,57,m,Black,1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Smith
02/04/2015,Donald Newbury,52,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
02/11/2015,Walter Storey,47,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Charles
03/11/2015,Manuel Vasquez,46,m,Latino,1 Latino Female(s),TX,S,Lethal Injection,No,No,No,No,Bexar
03/17/2015,Cecil Clayton,74,m,White,1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Barry
04/09/2015,Kent Sprouse,42,m,White,1 White Male(s)1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Ellis
04/14/2015,Andre Cole,52,m,Black,1 Black Male(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
06/09/2015,Richard Strong,47,m,Black,2 Black Female(s),MO,M,Lethal Injection,No,No,No,No,St. Louis
04/15/2015,Manuel Garza,34,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Bexar
05/12/2015,Derrick Charles,32,m,Black,2 Black Female(s)1 Black Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
06/18/2015,Gregory Russeau,45,m,Black,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Smith
07/14/2015,David Zink,55,m,White,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,St. Clair
08/12/2015,Daniel Lopez,27,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,Yes,No,Nueces
09/01/2015,Roderick Nunley,50,m,Black,1 White Female(s),MO,M,Lethal Injection,No,No,No,No,Jackson
09/30/2015,Kelly Gissendaner,47,f,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Gwinnett
10/01/2015,Alfredo Prieto,49,m,Latino,1 White Male(s)1 White Female(s),VA,S,Lethal Injection,No,No,No,Yes,Fairfax
10/06/2015,Juan Garcia,35,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
10/14/2015,Licho Escamilla,33,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Dallas
10/29/2015,Jerry Correll,59,m,White,4 White Female(s),FL,S,Lethal Injection,No,No,No,No,Orange
11/18/2015,Raphael Holiday,36,m,Black,3 Black Female(s),TX,S,Lethal Injection,No,No,No,No,Madison
11/19/2015,Marcus Johnson,50,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Dougherty
12/09/2015,Brian Keith Terrell,47,m,Black,1 Black Male(s),GA,S,Lethal Injection,No,No,No,No,Newton
01/07/2016,Oscar Bolin,53,m,White,1 White Female(s),FL,S,Lethal Injection,No,No,No,No,Pasco
01/20/2016,Richard Masterson,43,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Harris
01/21/2016,Christopher Brooks,43,m,White,1 White Female(s),AL,S,Lethal Injection,No,No,No,No,Jefferson
01/27/2016,James Freeman,35,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Wharton
02/03/2016,Brandon Jones,72,m,Black,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Cobb
02/16/2016,Gustavo Garcia,43,m,Latino,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Collin
02/17/2016,Travis Hittson,45,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Houston
03/09/2016,Coy Wesbrook,58,m,White,1 Latino Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,No,No,Harris
03/22/2016,Adam Ward,33,m,White,1 White Male(s),TX,S,Lethal Injection,No,No,No,No,Hunt
03/31/2016,Joshua Bishop,41,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Baldwin
04/06/2016,Pablo Vasquez,38,m,Latino,1 Latino Male(s),TX,S,Lethal Injection,No,No,No,No,Hidalgo
04/12/2016,Kenneth Fults,47,m,Black,1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Spalding
04/27/2016,Daniel Lucas,37,m,White,2 White Male(s)1 White Female(s),GA,S,Lethal Injection,No,No,No,No,Jones
05/11/2016,Earl Forrest,66,m,White,2 White Female(s)1 White Male(s),MO,M,Lethal Injection,No,No,No,No,Platte
07/15/2016,John Conner,60,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Telfair
10/05/2016,Barney Fuller,53,m,White,1 White Male(s)1 White Female(s),TX,S,Lethal Injection,No,No,Yes,No,Houston County
10/19/2016,Gregory Lawler,63,m,White,1 White Male(s),GA,S,Lethal Injection,No,No,No,No,Fulton
11/16/2016,Steven Spears,54,m,White,1 White Female(s),GA,S,Lethal Injection,No,No,Yes,No,Lumpkin`;

var executionDataCSVHeader = "Date,Name,Age,Sex,Race,NumberRaceSexOfVictims,State,Region,Method,Juvenile,Federal,Volunteer,ForeignNational,County";

var executionData = [];
{
  var records = executionDataCSV.split("\n");
  var fieldNames = executionDataCSVHeader.split(",");

  for(var i=0; i<records.length; i++) {
    var record = records[i].split(",");
    var recordHash = {}
    for(var j=0; j<fieldNames.length; j++) {
      var fieldName = fieldNames[j].toLowerCase(); 
      if(j==0) { // date
        var date = new Date(record[j]);
        recordHash[fieldName] = date
        recordHash.year = date.getFullYear().toString();
      }
      else {
        recordHash[fieldName] = record[j];  
      }
    }
    executionData.push(recordHash);
  }
}