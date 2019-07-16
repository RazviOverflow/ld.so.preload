NDSummary.OnToolTipsLoaded("File:libTTThwart_wrappers.h",{2:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">extern void</span> * dlsym_wrapper(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">char *</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The correct way to test for an error is to call dlerror() to clear any old error conditions, then call dlsym(), and then call dlerror() again, saving its return value into a variable, and check whether this saved value is not NULL.  https://&#8203;linux&#8203;.die&#8203;.net&#8203;/man&#8203;/3&#8203;/dlsym</div></div>"});