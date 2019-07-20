NDSummary.OnToolTipsLoaded("File:libTTThwart_internals.h",{37:"<div class=\"NDToolTip TInformation LC\"><div class=\"TTSummary\">Whatever</div></div>",49:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Function used to retrieve the actual process name.</div></div>",69:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype69\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> check_parameters_properties(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">caller_function_name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks properties of the given parameters, this is, the given path and inode. Checking properties in this context means checking if a file_object_info with the same path already exists in the array. If it doesn\'t, insert it; othwerwise (if it does) compare the given inode and the inode of the file_object_info as well as the file mode and the device id. If they\'re equal continue execution; otherwise abort execution because a possible TOCTTOU is detected.</div></div>",66:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype66\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const char</span> * sanitize_and_get_absolute_path(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">char *</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function to get full path of a given parameter without resolving, expanding symbolic links. That\'s why realpath() is useless.&nbsp; Based on: https://&#8203;stackoverflow&#8203;.com&#8203;/questions&#8203;/4774116&#8203;/realpath-without-resolving-symlinks&#8203;/34202207&#8203;#34202207</div></div>",67:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype67\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const char</span> * sanitize_and_get_absolute_path_from_dir_file_descriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">src,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">directory_fd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function to get full path of a given parameter without resolving, expanding symbolic links but using a directory file descriptor as current working dir.&nbsp; It is assumed that the file is indeed within that directory. The function translates the file descriptor into the actual directory (string).</div></div>",68:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype68\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">char</span> * get_directory_from_fd(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">directory_fd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to retrieve as string the full directory path pointed to by a given file descriptor.</div></div>",11:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> get_fs_and_initialize_checking_functions(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Determines what the file system of a given path is and, based on that, initialize check_parameters_properties function accordingly. Please refer to that function in order to know what different initializations means.</div></div>",21:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype21\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> check_dlsym_error()</div><div class=\"TTSummary\">Just a wrapper to check dlsym errors. This wrapper complies wit the recommendations given at the offical documentation.</div></div>",13:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype13\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> print_function_and_path(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">func,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">sanitized_path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to log what function was called, what path it was called with and its sanitized version.</div></div>",14:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype14\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> get_number_of_variable_arguments_char_pointer_type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">va_list&nbsp;</td><td class=\"PName last\">variable_arguments</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to calculate the number of arguments given a variable char argument list.</div></div>",15:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ino_t get_inode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to get the corresponding inode of a given path.</div></div>",16:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> path_is_absolute(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to determine whether a path is absolute.</div></div>",17:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> file_does_exist(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">pathname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to determine whether a file exists at the moment of invocation.&nbsp; In order to do so, it calls &lt;open&gt; and check the value of the returned file descriptior.</div></div>",18:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype18\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> remove_directory_and_content(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path_to_remove</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Funcrtion used to recursively delete a given directory.</div></div>",19:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype19\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">struct</span> stat get_file_metadata(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to retrieve metadata of a given path. In order to do so, the function calls &lt;open&gt;.</div></div>",20:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> starts_with(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">pre,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to check whether the given str parameter start with the given pre parameter.</div></div>"});