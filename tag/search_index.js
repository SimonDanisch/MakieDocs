var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Makie-1",
    "page": "Home",
    "title": "Makie",
    "category": "section",
    "text": "Makie is a high level plotting interface for GLVisualize, with a focus on interactivity and speed.It can also be seen as a prototype for a new design of Plots.jl, since it will implement a very similar interface and incorporate a lot of the ideas.A fresh start instead of the already available GLVisualize backend for Plots.jl was needed for the following reasons:Plots.jl was written to create static plots without any interaction. This is deeply reflected in the internal design and makes it hard to integrate the high performance interaction possibilities from GLVisualize.\nPlots.jl has many high level plotting packages as a backend which lead to a very inconsistent design for the backends. E.g. there is no straight interface a backend needs to implement. The backend abstraction happens at a very high level and the Plots.jl design relies on the high-level backends to fill in a lot of functionality - which lead to a lot of duplicated work for the lower level backends and a lot of inconsistent behavior since the code isn't shared between backends. It also means that it is a lot of work to maintain a backend.\nThe attributes a plot/series contains and where the default creation happens is opaque and not well documented. Sometimes it's the task of the backend to create defaults for missing attributes, sometimes Plots.jl creates the defaults. A missing attribute is signaled in too many different ways (e.g false, nothing, \"\") which then needs to be checked and filled in by the backend. This leads to making it very challenging to e.g. find the color of a line for different plot types and creates buggy, inconsistent and messy backend code.\nAs mentioned in point 2, there is not a single consistent low level drawing API. This also influences recipes, since there is not a straight mapping to a low level drawing API and therefore it's not that easy to compose. There should be a finite set of 'atomic' drawing operations (which can't be decomposed further) which a backend needs to implement and the rest should be implemented via recipes using those atomic operations. So once a backend implements those, it will support all of the plotting operations and only minor maintenance work needs to be done from that point on.\nBackend loading is done in Plots.jl via evaling the backend code. This has at 4 negative consequences:  a) Backend code can't be precompiled leading to longer load times  b) Backend dependencies are not in the Plots.jl REQUIRE  c) Backend dependencies get loaded via a function that gets evaled, so it's a bit awkward to use those dependencies in the function inside a backend  d) World age issues because of the evalPlease read the chapters Scene, Functions, Interaction, Extending, Backends and Devdocs to see how Makie solves those issues!The code that will be moved back to Plots.jl lives in plotsbase."
},

{
    "location": "scene.html#",
    "page": "Scene",
    "title": "Scene",
    "category": "page",
    "text": ""
},

{
    "location": "scene.html#Makie.Node",
    "page": "Scene",
    "title": "Makie.Node",
    "category": "Type",
    "text": "A Makie flavored Signal that can be used to link attributes\n\n\n\n"
},

{
    "location": "scene.html#Makie.Scene",
    "page": "Scene",
    "title": "Makie.Scene",
    "category": "Type",
    "text": "A scene is a holder of attributes which are all of the type Node. A scene can contain attributes, which are themselves scenes. Nodes can be connected, since they're signals under the hood, which can be created from other nodes.\n\n\n\n"
},

{
    "location": "scene.html#Scene-1",
    "page": "Scene",
    "title": "Scene",
    "category": "section",
    "text": "\nNode\n\nScene\n"
},

{
    "location": "conversions.html#",
    "page": "Conversions",
    "title": "Conversions",
    "category": "page",
    "text": ""
},

{
    "location": "conversions.html#Makie.to_color",
    "page": "Conversions",
    "title": "Makie.to_color",
    "category": "Function",
    "text": "to_color(b, x)\n\nColors.Colorants\n\n\n\nA Symbol naming a color, e.g. :black\n\n\n\nA String naming a color, e.g. :black or html style #rrggbb\n\n\n\nA Tuple or Array with elements that to_color accepts. If Array is a Matrix it will get interpreted as an Image\n\n\n\nTuple{<: ColorLike, <: AbstractFloat} for a transparent color\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_colormap",
    "page": "Conversions",
    "title": "Makie.to_colormap",
    "category": "Function",
    "text": "to_colormap(b, x)\n\nAn AbstractVector{T} with any object that to_color accepts\n\n\n\nTuple(A, B) or Pair{A, B} with any object that to_color accepts\n\n\n\nA Symbol/String naming the gradient. For more on what names are available please see: `available_gradients()\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_colornorm",
    "page": "Conversions",
    "title": "Makie.to_colornorm",
    "category": "Function",
    "text": "to_colornorm(b, norm, intensity)\n\nanything that can be converted to Vec2f0 (e.g. Tuple, Vector)\n\n\n\nIf colornorm is nothing will default to calculate the extrema from intensity\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_scale",
    "page": "Conversions",
    "title": "Makie.to_scale",
    "category": "Function",
    "text": "to_scale(b, s::Number)::Vec\n\n\n\nto_scale(b, s::VecLike)::Point\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_offset",
    "page": "Conversions",
    "title": "Makie.to_offset",
    "category": "Function",
    "text": "to_offset(b, s::Number)::Point\n\n\n\nto_scale(b, s::VecLike)::Point\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_rotation",
    "page": "Conversions",
    "title": "Makie.to_rotation",
    "category": "Function",
    "text": "to_rotation(b, vec4)\n\n\n\nto_rotation(b, quaternion)\n\n\n\nto_rotation(b, tuple_float)\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_image",
    "page": "Conversions",
    "title": "Makie.to_image",
    "category": "Function",
    "text": "to_image(b, image)\n\nAll kinds of images\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_bool",
    "page": "Conversions",
    "title": "Makie.to_bool",
    "category": "Function",
    "text": "to_bool(b, bool)\n\nTo boolean\n\n\n\nto_bool(b, tuple)\n\nAccepts Tuple of Bool\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_index_buffer",
    "page": "Conversions",
    "title": "Makie.to_index_buffer",
    "category": "Function",
    "text": "to_index_buffer(b, x::GLBuffer{UInt32})\n\n\n\nTOrSignal{Int}, AbstractVector{UnitRange{Int}}, TOrSignal{UnitRange{Int}}\n\n\n\nAbstractVector{<:Integer} assumend 1-based indexing\n\n\n\nAbstractVector{<:Face{2}} for linesegments\n\n\n\nAbstractVector{UInt32}, is assumed to be 0 based\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_positions",
    "page": "Conversions",
    "title": "Makie.to_positions",
    "category": "Function",
    "text": "to_positions(b, positionlike)\n\nNTuple{2, AbstractArray{Float}} for 2D points\n\n\n\nNTuple{3, AbstractArray{Float}} for 3D points\n\n\n\nview(AbstractArray{Point}, idx) for a subset of points. Can be shared (so you can plot subsets of the same data)!\n\n\n\nAbstractArray{T} where T needs to have length defined and must be convertible to a Point\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_array",
    "page": "Conversions",
    "title": "Makie.to_array",
    "category": "Function",
    "text": "to_array(b, arraylike)\n\nAbstractArray\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_scalefunc",
    "page": "Conversions",
    "title": "Makie.to_scalefunc",
    "category": "Function",
    "text": "to_scalefunc(b, x)\n\nFunction\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_text",
    "page": "Conversions",
    "title": "Makie.to_text",
    "category": "Function",
    "text": "to_text(b, x)\n\nAll text\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_font",
    "page": "Conversions",
    "title": "Makie.to_font",
    "category": "Function",
    "text": "to_font(scene, x)\n\na string naming a font, e.g. helvetica\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_intensity",
    "page": "Conversions",
    "title": "Makie.to_intensity",
    "category": "Function",
    "text": "AbstractArray\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_surface",
    "page": "Conversions",
    "title": "Makie.to_surface",
    "category": "Function",
    "text": "to_surface(b, x::Range)\n\nRange\n\n\n\nto_surface(b, arraylike)\n\nAnything that can be converted to Matrix/Vector of Float32\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_spritemarker",
    "page": "Conversions",
    "title": "Makie.to_spritemarker",
    "category": "Function",
    "text": "to_spritemarker(b, x::Circle)\n\nGeometryTypes.Circle(Point2(...), radius)\n\n\n\nto_spritemarker(b, ::Type{Circle})\n\nType{GeometryTypes.Circle}\n\n\n\nto_spritemarker(b, ::Type{Rectangle})\n\nType{GeometryTypes.Rectangle}\n\n\n\nto_spritemarker(b, marker::Char)\n\nAny Char, including unicode\n\n\n\nMatrix of AbstractFloat will be interpreted as a distancefield (negative numbers outside shape, positive inside)\n\n\n\nAny AbstractMatrix{<: Colorant} or other image type\n\n\n\nA Symbol - Available options can be printed with available_marker_symbols()\n\n\n\nVector of anything that is accepted as a single marker will give each point it's own marker. Note that it needs to be a uniform vector with the same element type!\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_static_vec",
    "page": "Conversions",
    "title": "Makie.to_static_vec",
    "category": "Function",
    "text": "to_static_vec(b, x)\n\nAbstractArray\n\n\n\nAny StaticVector\n\n\n\nNTuple\n\n\n\nAbstract array of which the elements can be converted to vec\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_rotations",
    "page": "Conversions",
    "title": "Makie.to_rotations",
    "category": "Function",
    "text": "to_rotations(b, x)\n\nBillboard() for a rotation that will always face the camera\n\n\n\nAny AbstractArray which elements can be converted to Vec4 (as a quaternion x, y, z, w)\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_markersize2d",
    "page": "Conversions",
    "title": "Makie.to_markersize2d",
    "category": "Function",
    "text": "to_markersize2d(b, x)\n\nAnything that can be converted to Vec2f0 for x, y scale\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_markersize3d",
    "page": "Conversions",
    "title": "Makie.to_markersize3d",
    "category": "Function",
    "text": "to_markersize3d(b, x)\n\nAnything that can be converted to Vec3f0 for x, y, z scale\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_linestyle",
    "page": "Conversions",
    "title": "Makie.to_linestyle",
    "category": "Function",
    "text": "to_linestyle(b, x)\n\nNothing for no style\n\n\n\nAbstractVector{<:AbstractFloat} for denoting sequences of fill/nofill. E.g. [0.5, 0.8, 1.2] will result in 0.5 filled, 0.3 unfilled, 0.4 filled. 1.0 unit is one linewidth!\n\n\n\nA Symbol equal to :dash, :dot, :dashdot, :dashdotdot\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_normals",
    "page": "Conversions",
    "title": "Makie.to_normals",
    "category": "Function",
    "text": "to_normals(b, x)\n\nVector{Normal{3}}\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_faces",
    "page": "Conversions",
    "title": "Makie.to_faces",
    "category": "Function",
    "text": "to_faces(b, x)\n\nAny array of NTuple/GeometryTypes.Face\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_attribut_id",
    "page": "Conversions",
    "title": "Makie.to_attribut_id",
    "category": "Function",
    "text": "to_attribut_id(b, x)\n\nIndex into Mesh attributes, Vector{Integer}\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_mesh",
    "page": "Conversions",
    "title": "Makie.to_mesh",
    "category": "Function",
    "text": "to_mesh(b, meshlike)\n\nAbstractMesh\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_float",
    "page": "Conversions",
    "title": "Makie.to_float",
    "category": "Function",
    "text": "to_float(b, x)\n\nAny Object convertible to Floatingpoint\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_spatial_order",
    "page": "Conversions",
    "title": "Makie.to_spatial_order",
    "category": "Function",
    "text": "to_spatial_order(b, x)\n\n\"xy\" or \"yx\"\n\n\n\n:xy or :yx\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_interval",
    "page": "Conversions",
    "title": "Makie.to_interval",
    "category": "Function",
    "text": "to_interval(b, x)\n\nTuple{<: Number, <: Number}\n\n\n\nPair{<: Number, <: Number} e.g. 2 => 100\n\n\n\nAbstractVector will be interpreted as an interval from minimum to maximum\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_volume_algorithm",
    "page": "Conversions",
    "title": "Makie.to_volume_algorithm",
    "category": "Function",
    "text": "to_volume_algorithm(b, x)\n\nEnum values: IsoValue Absorption MaximumIntensityProjection AbsorptionRGBA IndexedAbsorptionRGBA\n\n\n\nSymbol/String: iso, absorption, mip, absorptionrgba, indexedabsorption\n\n\n\n"
},

{
    "location": "conversions.html#Makie.to_3floats",
    "page": "Conversions",
    "title": "Makie.to_3floats",
    "category": "Function",
    "text": "3 Numbers for each dimension\n\n\n\n"
},

{
    "location": "conversions.html#Conversions-1",
    "page": "Conversions",
    "title": "Conversions",
    "category": "section",
    "text": "Every attribute has a conversion function, allowing attributes to take in rich input types, but keep the variance low for the backends. The conversions are overloadable as explained in Extending, making it simple to integrate custom types.to_color\n\nto_colormap\n\nto_colornorm\n\nto_scale\n\nto_offset\n\nto_rotation\n\nto_image\n\nto_bool\n\nto_index_buffer\n\nto_positions\n\nto_array\n\nto_scalefunc\n\nto_text\n\nto_font\n\nto_intensity\n\nto_surface\n\nto_spritemarker\n\nto_static_vec\n\nto_rotations\n\nto_markersize2d\nto_markersize3d\n\nto_linestyle\n\nto_normals\n\nto_faces\n\nto_attribut_id\n\nto_mesh\n\nto_float\n\nto_spatial_order\n\nto_interval\n\nto_volume_algorithm\n\nto_3floats"
},

{
    "location": "functions.html#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "functions.html#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": "Primitive plotting functions. These are the most atomic operations from which one can stack together more complex plots"
},

{
    "location": "functions.html#Makie.scatter",
    "page": "Functions",
    "title": "Makie.scatter",
    "category": "Function",
    "text": "scatter(x, y, z) / scatter(x, y) / scatter(positions)\n\nPlots a marker for each element in xyz/positions\n\nAttributes:\n\nExclusive Attribute sets:\n\n\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute z, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nend\n\n\n\n____________________\n\nExclusive Attribute sets:\n\n\n\nAttribute color, conversion function to_color\n\nor\n\n\n\nAttribute colormap, conversion function to_colormap\n\nAttribute intensity, conversion function to_intensity\n\nAttribute colornorm, conversion function to_colornorm\n\nend\n\n\n\n____________________\n\nAttribute marker, conversion function to_spritemarker\n\n____________________\n\nAttribute strokecolor, conversion function to_color\n\n____________________\n\nAttribute strokewidth, conversion function to_float\n\n____________________\n\nAttribute glowcolor, conversion function to_color\n\n____________________\n\nAttribute glowwidth, conversion function to_float\n\n____________________\n\nAttribute markersize, conversion function to_markersize2d\n\n____________________\n\nAttribute rotations, conversion function to_rotations\n\n____________________\n\n\n\n"
},

{
    "location": "functions.html#Scatter-1",
    "page": "Functions",
    "title": "Scatter",
    "category": "section",
    "text": "using Makie\nscene = Scene(resolution = (500, 500))\nscatter(rand(10), rand(10))\ncenter!(scene)\nsave(\"scatter.png\", scene); nothing # hide(Image: )scatter"
},

{
    "location": "functions.html#Makie.meshscatter",
    "page": "Functions",
    "title": "Makie.meshscatter",
    "category": "Function",
    "text": "meshscatter(x, y, z) / meshscatter(x, y) / meshscatter(positions)\n\nPlots a mesh for each element in xyz/positions\n\nAttributes:\n\nExclusive Attribute sets:\n\n\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute z, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nend\n\n\n\n____________________\n\nExclusive Attribute sets:\n\n\n\nAttribute color, conversion function to_color\n\nor\n\n\n\nAttribute colormap, conversion function to_colormap\n\nAttribute intensity, conversion function to_intensity\n\nAttribute colornorm, conversion function to_colornorm\n\nend\n\n\n\n____________________\n\nAttribute marker, conversion function to_mesh\n\n____________________\n\nAttribute markersize, conversion function to_markersize3d\n\n____________________\n\nAttribute rotations, conversion function to_rotations\n\n____________________\n\n\n\n"
},

{
    "location": "functions.html#Meshscatter-1",
    "page": "Functions",
    "title": "Meshscatter",
    "category": "section",
    "text": "using Makie, GLVisualize, GeometryTypes\nscene = Scene(resolution = (500, 500))\nmeshscatter(Sphere(Point3f0(0), 1f0), marker = loadasset(\"cat.obj\"), markersize = 0.2)\ncenter!(scene)\nsave(\"meshscatter.png\", scene); nothing # hide(Image: )meshscatter"
},

{
    "location": "functions.html#Makie.lines",
    "page": "Functions",
    "title": "Makie.lines",
    "category": "Function",
    "text": "lines(x, y, z) / lines(x, y) / lines(positions)\n\nPlots a connected line for each element in xyz/positions\n\nAttributes:\n\nExclusive Attribute sets:\n\n\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute z, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nend\n\n\n\n____________________\n\nExclusive Attribute sets:\n\n\n\nAttribute color, conversion function to_color\n\nor\n\n\n\nAttribute colormap, conversion function to_colormap\n\nAttribute intensity, conversion function to_intensity\n\nAttribute colornorm, conversion function to_colornorm\n\nend\n\n\n\n____________________\n\nAttribute linewidth, conversion function to_float\n\n____________________\n\nAttribute linestyle, conversion function to_linestyle\n\n____________________\n\nAttribute drawover, conversion function to_bool\n\n____________________\n\n\n\n"
},

{
    "location": "functions.html#Lines-1",
    "page": "Functions",
    "title": "Lines",
    "category": "section",
    "text": "using Makie\nscene = Scene(resolution = (500, 500))\nx = linspace(0, 3pi)\nlines(x, sin.(x))\ncenter!(scene)\nsave(\"lines.png\", scene); nothing # hide(Image: )lines"
},

{
    "location": "functions.html#Surface-1",
    "page": "Functions",
    "title": "Surface",
    "category": "section",
    "text": "using Makie\nscene = Scene(resolution = (500, 500))\nN = 32\nfunction xy_data(x,y,i, N)\n    x = ((x/N)-0.5)*i\n    y = ((y/N)-0.5)*i\n    r = sqrt(x*x + y*y)\n    res = (sin(r)/r)\n    isnan(res) ? 1 : res\nend\nz = [Float32(xy_data(x, y, 20, 32)) + 0.5 for x=1:32, y=1:32]\nrange = linspace(0, 3, N)\nsurf = surface(range, range, z, colormap = :Spectral)\ncenter!(scene)\nsave(\"surface.png\", scene); nothing # hide(Image: )"
},

{
    "location": "functions.html#Makie.wireframe",
    "page": "Functions",
    "title": "Makie.wireframe",
    "category": "Function",
    "text": "wireframe(x, y, z) / wireframe(positions) / wireframe(mesh)\n\nDraws a wireframe either interpreted as a surface or mesh\n\nAttributes:\n\n\n\n"
},

{
    "location": "functions.html#Wireframe-1",
    "page": "Functions",
    "title": "Wireframe",
    "category": "section",
    "text": "wireframeusing Makie\nscene = Scene(resolution = (500, 500))\nsurf = wireframe(range, range, z)\ncenter!(scene)\nsave(\"wireframe.png\", scene); nothing # hide(Image: )"
},

{
    "location": "functions.html#Makie.mesh",
    "page": "Functions",
    "title": "Makie.mesh",
    "category": "Function",
    "text": "mesh(x, y, z) / mesh(mesh_object) / mesh(x, y, z, faces) / mesh(xyz, faces)\n\nPlots a 3D mesh\n\nAttributes:\n\nAttribute shading, conversion function to_bool\n\n____________________\n\nAttribute attribute_id, conversion function to_attribut_id\n\n____________________\n\nAttribute color, conversion function to_color\n\n____________________\n\nExclusive Attribute sets:\n\n\n\nAttribute indices, conversion function to_faces\n\nExclusive Attribute sets:\n\n\n\nAttribute positions, conversion function to_positions\n\nor\n\n\n\nAttribute x, conversion function to_array\n\nAttribute y, conversion function to_array\n\nAttribute z, conversion function to_array\n\nAttribute positions, conversion function to_positions\n\nend\n\n\n\nAttribute mesh, conversion function to_mesh\n\nor\n\n\n\nAttribute mesh, conversion function to_mesh\n\nend\n\n\n\n____________________\n\n\n\n"
},

{
    "location": "functions.html#Mesh-1",
    "page": "Functions",
    "title": "Mesh",
    "category": "section",
    "text": "meshusing Makie\nusing GLVisualize: loadasset, assetpath\n\nscene = Scene(resolution = (500, 500))\nx = [0, 1, 2, 0]\ny = [0, 0, 1, 2]\nz = [0, 2, 0, 1]\ncolor = [:red, :green, :blue, :yellow]\ni = [0, 0, 0, 1]\nj = [1, 2, 3, 2]\nk = [2, 3, 1, 3]\n\nindices = [1, 2, 3, 1, 3, 4, 1, 4, 2, 2, 3, 4]\nmesh(x, y, z, indices, color = color)\nr = linspace(-0.5, 2.5, 4)\naxis(r, r, r)\ncenter!(scene)\nsave(\"coloredmesh.png\", scene); nothing # hide(Image: )scene = Scene(resolution = (500, 500))\nmesh(loadasset(\"cat.obj\"))\naxis(r, r, r)\ncenter!(scene)\nsave(\"loadedmesh.png\", scene); nothing # hide(Image: )using Makie, GeometryTypes, FileIO, GLVisualize\n\nscene = Scene(resolution = (500, 500))\ncat = load(assetpath(\"cat.obj\"), GLNormalUVMesh)\nMakie.mesh(cat, color = loadasset(\"diffusemap.tga\"))\ncenter!(scene)\nsave(\"texturemesh.png\", scene); nothing # hide(Image: )"
},

{
    "location": "functions.html#Makie.heatmap",
    "page": "Functions",
    "title": "Makie.heatmap",
    "category": "Function",
    "text": "heatmap(x, y, values) / heatmap(values)\n\nPlots a image on heatmap x, y (defaults to dimensions)\n\nAttributes:\n\nAttribute x, conversion function to_interval\n\n____________________\n\nAttribute y, conversion function to_interval\n\n____________________\n\nAttribute linewidth, conversion function to_float\n\n____________________\n\nAttribute levels, conversion function to_float\n\n____________________\n\nAttribute heatmap, conversion function to_array\n\n____________________\n\nAttribute colormap, conversion function to_colormap\n\n____________________\n\n____________________\n\n\n\n"
},

{
    "location": "functions.html#Heatmap-1",
    "page": "Functions",
    "title": "Heatmap",
    "category": "section",
    "text": "heatmapusing Makie\nscene = Scene(resolution = (500, 500))\nheatmap(rand(32, 32))\ncenter!(scene)\nsave(\"heatmap.png\", scene); nothing # hide(Image: )"
},

{
    "location": "functions.html#Makie.volume",
    "page": "Functions",
    "title": "Makie.volume",
    "category": "Function",
    "text": "volume(volume_data)\n\nPlots a volume\n\nAttributes:\n\nAttribute volume, conversion function to_array\n\n____________________\n\nExclusive Attribute sets:\n\n\n\nAttribute color, conversion function to_color\n\nor\n\n\n\nAttribute colormap, conversion function to_colormap\n\nend\n\n\n\n____________________\n\nAttribute algorithm, conversion function to_volume_algorithm\n\n____________________\n\nAttribute absorption, conversion function to_float\n\n____________________\n\nAttribute isovalue, conversion function to_float\n\n____________________\n\nAttribute isorange, conversion function to_float\n\n____________________\n\n\n\n"
},

{
    "location": "functions.html#Volume-1",
    "page": "Functions",
    "title": "Volume",
    "category": "section",
    "text": "volume\n#julia\nusing Makie\nscene = Scene()\nvolume(rand(32, 32, 32), algorithm = :iso)\ncenter!(scene)\nsave(\"volume.png\", scene); nothing # hide(Image: )image\nvolume\ntext\npoly"
},

{
    "location": "documentation.html#",
    "page": "Documentation",
    "title": "Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "documentation.html#Makie.available_marker_symbols-Tuple{}",
    "page": "Documentation",
    "title": "Makie.available_marker_symbols",
    "category": "Method",
    "text": "available_marker_symbols()\n\nDisplays all available marker symbols\n\n\n\n"
},

{
    "location": "documentation.html#Makie.available_gradients-Tuple{}",
    "page": "Documentation",
    "title": "Makie.available_gradients",
    "category": "Method",
    "text": "available_gradients()\n\nPrints all available gradient names\n\n\n\n"
},

{
    "location": "documentation.html#Documentation-1",
    "page": "Documentation",
    "title": "Documentation",
    "category": "section",
    "text": "\navailable_marker_symbols()\n\navailable_gradients()\n"
},

{
    "location": "backends.html#",
    "page": "Backends",
    "title": "Backends",
    "category": "page",
    "text": ""
},

{
    "location": "backends.html#Backends-1",
    "page": "Backends",
    "title": "Backends",
    "category": "section",
    "text": ""
},

{
    "location": "extending.html#",
    "page": "Extending",
    "title": "Extending",
    "category": "page",
    "text": ""
},

{
    "location": "extending.html#Extending-1",
    "page": "Extending",
    "title": "Extending",
    "category": "section",
    "text": "There are 4 ways to extend Makie:By creating a new function combining multiple plotting commands (duh)\nBy overloading conversions for your custom type\nBy overloading plot(...) for your own type\nBy adding a new primitive + shader"
},

{
    "location": "extending.html#Option-1-1",
    "page": "Extending",
    "title": "Option 1",
    "category": "section",
    "text": "The first option is quite trivial and can be done in any plotting package and language: just create a function that scripts together a Plot."
},

{
    "location": "extending.html#Option-2-1",
    "page": "Extending",
    "title": "Option 2",
    "category": "section",
    "text": "The plotting pipeline heavily relies on conversion functions which check the attributes for validity, document what's possible to pass and convert them to the types that the backends need. They usually look like this:to_positions(backend, positions) = Point3f0.(positions) # E.g. everything that can be converted to a PointAs you can see, the first argument is the backend, so you can overload this for a specific backend or for a specific position type. This can look something like this:using Makie, GeometryTypes\n\n# To simplify the example, we take the already existing GeometryTypes.Circle type, which\n# can already be decomposed into positions\nfunction Makie.to_positions(backend, x::Circle)\n    # Convert to a type to_positions can handle.\n    # Everything that usually works in e.g. scatter/lines should be allowed here.\n    positions = decompose(Point2f0, x, 50)\n    # Pass your position data to to_positions,\n    # just in case the backend has some extra converts\n    # that are not visible in the user facing API.\n    Makie.to_positions(backend, positions)\nend\nscene = Scene(resolution = (500, 500))\np1 = lines(Circle(Point2f0(0), 5f0))\np2 = scatter(Circle(Point2f0(0), 6f0))\ncenter!(scene)\nsave(\"ext_plot1.png\", scene); nothing # hide(Image: )since the pipeline for converting attributes also knows about Circle now, we can update the attribute directly with our own typep2[:positions] = Circle(Point2f0(0), 7f0)\ncenter!(scene)\nsave(\"ext_plot2.png\", scene); nothing # hide(Image: )"
},

{
    "location": "extending.html#Option-3-1",
    "page": "Extending",
    "title": "Option 3",
    "category": "section",
    "text": "Option 3 is very similar to Plots.jl recipes. Inside the function you can just use all of the plotting and drawing API to create a rich visual representation of your type. The signature that needs overloading is:function plot(obj::MyType, kw_args::Dict)\n    # use primitives and other recipes to create a new plot\n    scatter(obj, kw_arg[:my_attribute])\n    lines(...)\n    polygon(...)\nend"
},

{
    "location": "extending.html#Option-4-1",
    "page": "Extending",
    "title": "Option 4",
    "category": "section",
    "text": "Option 4 is pretty unique and is a real extension of Makie's functionality as it adds a new primitive drawing type. This interface will likely change a lot in the future, since it carries quite a lot of technical debt from the design of GLAbstraction + GLVisualize, but this is how you can do it right now:You will need to create defaults for the attributes of your new visual. For a documentation on how to use this macro look at Devdocs.\nmy_attribute_convert(A::Array) = Texture(A)\nmy_attribute_convert(A::Texture) = A\nmy_attribute_convert(A) = error(\"A needs to be an array or Texture. Found: $(typeof(A))\")\n\n@default function my_drawing_type(scene, kw_args)\n    my_attribute = my_attribute_convert(my_attribute)\n    another_attribute = to_float(another_attribute) # always gets converted to Float32\nend\n\nfunction my_drawing_type(main_object::MyType, kw_args::Dict)\n    # optionally expand keyword arguments. E.g. m = (1, :white) becomes markersize = 1, markercolor = :white\n    kw_args = expand_kwargs(kw_args)\n    scene = get_global_scene()\n    # The default macro adds a _defaults to the function name\n    kw_args = my_drawing_type_defaults(scene, kw_args) # fill in and convert attributes\n\n    boundingbox = Signal(AABB(Vec3f0(0), Vec3f0(1))) # calculate a boundingbox from your data\n\n    primitive = GL_TRIANGLES\n\n    vsh = vert\"\"\"\n        {{GLSL_VERSION}}\n        in vec2 position;\n        void main(){\n            gl_Position = vec4(position, 0, 1.0);\n        }\n    \"\"\"\n\n    fsh = frag\"\"\"\n        {{GLSL_VERSION}}\n        out vec4 outColor;\n        void main() {\n            outColor = vec4(1.0, 1.0, 1.0, 1.0);\n        }\n    \"\"\"\n    program = LazyShader(vsh, fsh)\n    robj = std_renderobject(shader_uniforms, program, boundingbox, primitive, nothing)\n    # The attributes that you add to the scene should be all signals and all editable.\n    # if an attribute is fixed, don't add it to the scene\n    insert_scene!(scene, :scatter, viz, attributes)\n    attributes\nend\n"
},

{
    "location": "themes.html#",
    "page": "Themes",
    "title": "Themes",
    "category": "page",
    "text": ""
},

{
    "location": "themes.html#Themes-1",
    "page": "Themes",
    "title": "Themes",
    "category": "section",
    "text": "It's pretty easy and interactive to change the current theme.using Makie, GeometryTypes, Colors, MacroTools\nscene = Scene()\nvx = -1:0.1:1;\nvy = -1:0.1:1;\n\nf(x, y) = (sin(x*10) + cos(y*10)) / 4\npsurf = surface(vx, vy, f)\n\npos = lift_node(psurf[:x], psurf[:y], psurf[:z]) do x, y, z\n    vec(Point3f0.(x, y', z .+ 0.5))\nend\npscat = scatter(pos)\nplines = lines(view(pos, 1:2:length(pos)))\ncenter!(scene)\nsave(\"theming_plot1.png\", scene); nothing # hide(Image: )Now, the first simple way of theming your plots/applying a series of attributes goes like this:@theme theme = begin\n    markersize = to_markersize2d(0.01)\n    strokecolor = to_color(:white)\n    strokewidth = to_float(0.01)\nend\n\n# this pushes all the values from theme to the plot\n\npush!(pscat, theme)\nsave(\"theming_plot2.png\", scene); nothing # hide(Image: )Other ways to update the values with a theme snippet:# Update the entire surface node with this\nscene[:scatter] = theme\n# Or permananently (to be more precise: just for this session) change the theme for scatter\nscene[:theme, :scatter] = theme\nscatter(lift_node(x-> x .+ (Point3f0(0, 0, 1),), pos)) # will now use new theme# Make a completely new theme\nfunction custom_theme(scene)\n    @theme theme = begin\n        linewidth = to_float(3)\n        colormap = to_colormap(:RdPu)\n        scatter = begin\n            marker = to_spritemarker(Circle)\n            markersize = to_float(0.03)\n            strokecolor = to_color(:white)\n            strokewidth = to_float(0.01)\n            glowcolor = to_color(RGBA(0, 0, 0, 0.4))\n            glowwidth = to_float(0.1)\n        end\n    end\n    # update theme values\n    scene[:theme] = theme\nend\n\n# apply it to the scene\ncustom_theme(scene)\n\n# From now everything will be plotted with new theme\npsurf = surface(vx, 1:0.1:2, psurf[:z])\ncenter!(scene)\nsave(\"theming_plot3.png\", scene); nothing # hide(Image: )"
},

{
    "location": "interaction.html#",
    "page": "Interaction",
    "title": "Interaction",
    "category": "page",
    "text": ""
},

{
    "location": "interaction.html#Interaction-1",
    "page": "Interaction",
    "title": "Interaction",
    "category": "section",
    "text": "Makie offers a sophisticated referencing system to share attributes across the Scene in your plot. This is great for animations and saving resources - also if the backend decides to put data on the GPU you might even share those in GPU memory."
},

{
    "location": "interaction.html#Using-Mouse-and-Time-to-animate-plots-1",
    "page": "Interaction",
    "title": "Using Mouse and Time to animate plots",
    "category": "section",
    "text": "The simples form is just to use getindex into a scene, which returns a life node! Which means, if you do anything with that node, your resulting data will also be life! lift_node creates a new node from a list of input nodes, which updates every time any  of the inputs updates.using Makie\n\nscene = Scene(resolution = (500, 500))\n\nf(t, v, s) = (sin(v + t) * s, cos(v + t) * s)\n\np1 = scatter(lift_node(t-> f.(t, linspace(0, 2pi, 50), 1), scene[:time]))\np2 = scatter(lift_node(t-> f.(t * 2.0, linspace(0, 2pi, 50), 1.5), scene[:time]))\ncenter!(scene)\nnothing\n# you can now reference to life attributes from the above plots:\n\nlines = lift_node(p1[:positions], p2[:positions]) do pos1, pos2\n    map((a, b)-> (a, b), pos1, pos2)\nend\n\nlinesegment(lines)\n\ncenter!(scene)\n# record a video \nio = VideoStream(scene, \".\", \"interaction\")\nfor i = 1:300\n    recordframe!(io)\n    yield()\n    sleep(1/30)\nend\nfinish(io, \"mp4\") # could also be gif, webm or mkv\nnothing<video controls autoplay>\n  <source src=\"interaction.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "interaction.html#@ref-1",
    "page": "Interaction",
    "title": "@ref",
    "category": "section",
    "text": "Is just syntactic sugar for accessing a key in a scene. It might actually get deprecated, since just accessing the scene directly is convenient enough!@ref Variable = Value # Inserts Value under name Variable into Scene@ref Scene.Name1.Name2 # Syntactic sugar for Scene[:Name1, :Name2] @ref Expr1, Expr1 # Syntactic sugar for (@ref Expr1, @ref Expr2)"
},

{
    "location": "interaction.html#Soon-to-be-implemented-1",
    "page": "Interaction",
    "title": "Soon to be implemented",
    "category": "section",
    "text": ""
},

{
    "location": "interaction.html#Animating-and-sharing-on-the-GPU-1",
    "page": "Interaction",
    "title": "Animating and sharing on the GPU",
    "category": "section",
    "text": "using Makie\n\nscene = Scene(resolution = (500, 500))\n@ref A = rand(32, 32) # if uploaded to the GPU, it will be shared on the GPU\n\nsurface(@ref A) # refer to exactly the same a in wireframe and surface plot\nwireframe((@ref A) .+ 0.5) # offsets A on the GPU based on the same data\n\nfor i = 1:10\n    # updates A - resulting in an animation of the surface and offsetted wireframe plot\n    @ref A[:, :] = rand(32, 32)\nend"
},

{
    "location": "interaction.html#Simple-GUI-1",
    "page": "Interaction",
    "title": "Simple GUI",
    "category": "section",
    "text": "using Makie\n\nscene = Scene()\n@ref slicer1 = slider(linspace(0, 1, 100)) # create a slider\n\n# generate some pretty data\nfunction xy_data(x,y,i)\n    x = (x - 0.5f0) * i\n    y = (y - 0.5f0) * i\n    r = sqrt(x * x + y * y)\n    Float32(sin(r) / r)\nend\n\nsurf(i, N) = Float32[xy_data(x, y, i, N) for x = linspace(0, 1, N), y = linspace(0, 1, N)]\n\nsurface(surf.(@ref slicer1, 512)) # refer to exactly the same a in wireframe and surface plot\n"
},

{
    "location": "axis.html#",
    "page": "Axis",
    "title": "Axis",
    "category": "page",
    "text": ""
},

{
    "location": "axis.html#Makie.axis",
    "page": "Axis",
    "title": "Makie.axis",
    "category": "Function",
    "text": "axis(xrange, yrange, [zrange])\n\nCreates a axis from a x,y,z ranges\n\nAttributes:\n\nAttribute axisnames, conversion function to_text\n\n____________________\n\nAttribute axisnames_color, conversion function to_color\n\n____________________\n\nAttribute axisnames_rotation_align, conversion function dontcare\n\n____________________\n\nAttribute axisnames_size, conversion function to_3floats\n\n____________________\n\nAttribute axisnames_font, conversion function to_font\n\n____________________\n\nAttribute showticks, conversion function to_bool\n\n____________________\n\nAttribute tickfont2d, conversion function to_text\n\n____________________\n\nAttribute tickfont3d, conversion function to_text\n\n____________________\n\nAttribute showaxis, conversion function to_bool\n\n____________________\n\nAttribute showgrid, conversion function to_bool\n\n____________________\n\nAttribute scalefuncs, conversion function to_scalefunc\n\n____________________\n\nAttribute gridcolors, conversion function to_color\n\n____________________\n\nAttribute gridthickness, conversion function to_3floats\n\n____________________\n\nAttribute axiscolors, conversion function to_color\n\n____________________\n\n\n\n"
},

{
    "location": "axis.html#Axis-1",
    "page": "Axis",
    "title": "Axis",
    "category": "section",
    "text": "The axis is just a scene object, making it easy to manipulate and share between plots. Axis objects also contains the mapping you want to apply to the data and can interactively be changed. An Axis object can be created from any boundingbox and inserted into any plot.axisusing Makie\nscene = Scene(resolution = (500, 500))\naviz = axis(linspace(0, 2, 4), linspace(0, 2, 4))\ncenter!(scene)\nsave(\"axis2d.png\", scene); nothing # hide(Image: )using Makie\nscene = Scene(resolution = (500, 500))\naviz = axis(linspace(0, 2, 4), linspace(0, 2, 4), linspace(0, 2, 4))\ncenter!(scene)\nsave(\"axis3d.png\", scene); nothing # hide(Image: )"
},

{
    "location": "axis.html#Interacting-with-the-Axis-1",
    "page": "Axis",
    "title": "Interacting with the Axis",
    "category": "section",
    "text": "One can quite easily interact with the attributes of the axis like with any other plot:# always tuples of xyz for most attributes that are applied to each axis\naviz[:gridcolors] = (:gray, :gray, :gray)\naviz[:axiscolors] = (:red, :black, :black)\naviz[:showticks] = (true, true, false)\nsave(\"axis3d_customized.png\", scene); nothing # hide(Image: )"
},

{
    "location": "legends.html#",
    "page": "Legends",
    "title": "Legends",
    "category": "page",
    "text": ""
},

{
    "location": "legends.html#Legends-1",
    "page": "Legends",
    "title": "Legends",
    "category": "section",
    "text": "The Legend is an interactive object, that can be edited and interacted with like any other object in Makie.You can create it on your own, or let it get created by automatically by a plot command.\nusing Makie, GeometryTypes, Colors\n\n# Create some plots for which we want to generate a legend\nscene = Scene()\nplots = map([:dot, :dash, :dashdot], [2, 3, 4]) do ls, lw\n    linesegment(linspace(1, 5, 100), rand(100), rand(100), linestyle = ls, linewidth = lw)\nend\npush!(plots, scatter(linspace(1, 5, 100), rand(100), rand(100)))\ncenter!(scene)\n\n# plot a legend for the plots with an array of names\nl = Makie.legend(plots, [\"attribute $i\" for i in 1:4])\nio = VideoStream(scene, \".\", \"legend\")\nrecord(io) = (for i = 1:35; recordframe!(io); sleep(1/30); end);\n\nrecord(io)\n# Change some attributes interactively\nl[:position] = (0.4, 0.7)\nrecord(io)\nl[:backgroundcolor] = RGBA(0.95, 0.95, 0.95)\nrecord(io)\nl[:strokecolor] = RGB(0.8, 0.8, 0.8)\nrecord(io)\nl[:gap] = 30\nrecord(io)\nl[:textsize] = 19\nrecord(io)\nl[:linepattern] = Point2f0[(0,-0.2), (0.5, 0.2), (0.5, 0.2), (1.0, -0.2)]\nrecord(io)\nl[:scatterpattern] = decompose(Point2f0, Circle(Point2f0(0.5, 0), 0.3f0), 9)\nrecord(io)\nl[:markersize] = 2f0\nrecord(io)\nfinish(io, \"mp4\")\nnothing<video controls autoplay>\n  <source src=\"legend.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "output.html#",
    "page": "Input Output",
    "title": "Input Output",
    "category": "page",
    "text": ""
},

{
    "location": "output.html#Input-Output-1",
    "page": "Input Output",
    "title": "Input Output",
    "category": "section",
    "text": "Makie overloads the FileIO interface. So you can just write e.g.:save(scene, \"test.png\")\nsave(scene, \"test.jpg\")There is also the option to save a plot as a Julia File (not implemented yet)save(scene, \"test.jl\")This will try to reproduce the plotting commands as closely as possible to recreate the current scene. You can specify if you want to save the defaults explicitly or if you not want to store them, so that whenever you change defaults and the saved code gets loaded it will take the new defaults."
},

{
    "location": "output.html#Makie.VideoStream",
    "page": "Input Output",
    "title": "Makie.VideoStream",
    "category": "Type",
    "text": "VideoStream(scene::Scene, dir = mktempdir(), name = \"video\")\n\nreturns a stream and a buffer that you can use to not allocate for new frames. Use add_frame!(stream, window, buffer) to add new video frames to the stream. Use finish(stream) to save the video to 'dir/name.mkv'. You can also call finish(stream, \"mkv\"), finish(stream, \"mp4\"), finish(stream, \"gif\") or finish(stream, \"webm\") to convert the stream to those formats.\n\n\n\n"
},

{
    "location": "output.html#Makie.finish",
    "page": "Input Output",
    "title": "Makie.finish",
    "category": "Function",
    "text": "finish(io::VideoStream, typ = \"mkv\"; remove_mkv = true)\n\nFlushes the video stream and optionally converts the file to typ which can be (mkv is default and doesn't need convert) gif, mp4 and webm. If you want to convert the original mkv to multiple formats you should choose remove_mkv = false, and remove it manually after you're done (with rm(videostream.path)) webm yields the smallest file size, mp4 and mk4 are marginally bigger and gifs are up to 6 times bigger!\n\n\n\n"
},

{
    "location": "output.html#VideoStream-1",
    "page": "Input Output",
    "title": "VideoStream",
    "category": "section",
    "text": "\nVideoStream\nfinishusing Makie\n\nscene = Scene(resolution = (500, 500))\n\nf(t, v, s) = (sin(v + t) * s, cos(v + t) * s, (cos(v + t) + sin(v)) * s)\nt = to_node(time()) # create a life signal\np1 = meshscatter(lift_node(t-> f.(t, linspace(0, 2pi, 50), 1), t))\np2 = meshscatter(lift_node(t-> f.(t * 2.0, linspace(0, 2pi, 50), 1.5), t))\ncenter!(scene)\nnothing\n# you can now reference to life attributes from the above plots:\n\nlines = lift_node(p1[:positions], p2[:positions]) do pos1, pos2\n    map((a, b)-> (a, b), pos1, pos2)\nend\n\nlinesegment(lines, linestyle = :dot)\n\ncenter!(scene)\n# record a video\nio = VideoStream(scene, \".\", \"output_vid\")\nfor i = 1:300\n    push!(t, time())\n    recordframe!(io)\n    yield()\n    sleep(1/30)\nend\nfinish(io, \"mp4\") # could also be gif, webm or mkv\nnothing<video controls autoplay>\n  <source src=\"output_vid.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "reflection.html#",
    "page": "Reflection",
    "title": "Reflection",
    "category": "page",
    "text": ""
},

{
    "location": "reflection.html#Reflection-1",
    "page": "Reflection",
    "title": "Reflection",
    "category": "section",
    "text": "Since objects with links (as explained in Interaction) to each other, all animatable etc, a plot object can become fairly complex. To work against this, there is a rich reflection api, allowing you to look into the scene tree, display what objects are linked and interactively change the attributes."
},

{
    "location": "layout.html#",
    "page": "Layouting",
    "title": "Layouting",
    "category": "page",
    "text": ""
},

{
    "location": "layout.html#Layouting-1",
    "page": "Layouting",
    "title": "Layouting",
    "category": "section",
    "text": "Every object contains a boundingbox and a box indicating where the object should be placed. By default, those boxes are the same. But if you want to move, stretch, scale an object, you can edit the latter. This can be a manual process, or an automatic one. E.g. there are several functions which try to automatically find a layout for certain objects."
},

{
    "location": "layout.html#Automatic-interface-1",
    "page": "Layouting",
    "title": "Automatic interface",
    "category": "section",
    "text": "layout!(object1, object2, objectN...) 1D grid (alternatively use a vector)\nlayout!(Matrix{Objects}(...)) # 2d Grid\nlayout!(Array{Objects, 3}(...))\n\n# TODO port layouting options from Plots.jl\n"
},

{
    "location": "layout.html#Manual-interface-1",
    "page": "Layouting",
    "title": "Manual interface",
    "category": "section",
    "text": "\nscale!(object, 1f0) # ND version with same scalar for all dimensions\nscale!(object, (1f0, 2f0)) # 2d\nscale!(object, (1f0, 2f0, 3f0)) # 3d\n\nrotate!(object, axis::Vec, amount_degree)\n\nmove!(object, amount) # for amount it's the same as with scale!\n\n# boundingbox can be any rect type, e.g. a 3D or 2D HyperRectangle\n# with the effect of exactly fitting `object` into `boundingbox`\nmove!(object, boundingbox)"
},

{
    "location": "devdocs.html#",
    "page": "Devdocs",
    "title": "Devdocs",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs.html#Devdocs-1",
    "page": "Devdocs",
    "title": "Devdocs",
    "category": "section",
    "text": ""
},

{
    "location": "devdocs.html#Logistical-issues-1",
    "page": "Devdocs",
    "title": "Logistical issues",
    "category": "section",
    "text": ""
},

{
    "location": "devdocs.html#Precompilation-1",
    "page": "Devdocs",
    "title": "Precompilation",
    "category": "section",
    "text": "Makie goes with the design of backends overloading the functions like scatter(::Backend, args...) which means they can be loaded in by Julias normal code loading mechanisms and should be precompile save. Makie also tries to be statically compilable, but this isn't as straightforward as one could think. So far it seems that all kind of globals are not save for static compilation and generated functions seem to also make problems. I'm slowly removing problematic constructs from the dependencies and try to get static compilation as quick as possible."
},

{
    "location": "devdocs.html#TODOs-/-Up-for-grabs-1",
    "page": "Devdocs",
    "title": "TODOs / Up for grabs",
    "category": "section",
    "text": ""
},

]}
