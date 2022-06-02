/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview  Loads all the TeX extensions
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

 import './action/ActionConfiguration.js';
 import './ams/AmsConfiguration.js';
 import './amscd/AmsCdConfiguration.js';
 import './autoload/AutoloadConfiguration.js';
 import './base/BaseConfiguration.js';
 import './bbox/BboxConfiguration.js';
 import './boldsymbol/BoldsymbolConfiguration.js';
 import './braket/BraketConfiguration.js';
 import './bussproofs/BussproofsConfiguration.js';
 import './cancel/CancelConfiguration.js';
 import './cases/CasesConfiguration.js';
 import './centernot/CenternotConfiguration.js';
 import './color/ColorConfiguration.js';
 import './colortbl/ColortblConfiguration.js';
 import './colorv2/ColorV2Configuration.js';
 import './configmacros/ConfigMacrosConfiguration.js';
 import './empheq/EmpheqConfiguration.js';
 import './enclose/EncloseConfiguration.js';
 import './extpfeil/ExtpfeilConfiguration.js';
 import './gensymb/GensymbConfiguration.js';
 import './html/HtmlConfiguration.js';
 import './mathtools/MathtoolsConfiguration.js';
 import './mhchem/MhchemConfiguration.js';
 import './newcommand/NewcommandConfiguration.js';
 import './noerrors/NoErrorsConfiguration.js';
 import './noundefined/NoUndefinedConfiguration.js';
 import './physics/PhysicsConfiguration.js';
 import './require/RequireConfiguration.js';
 import './setoptions/SetOptionsConfiguration.js';
 import './tagformat/TagFormatConfiguration.js';
 import './textcomp/TextcompConfiguration.js';
 import './textmacros/TextMacrosConfiguration.js';
 import './unicode/UnicodeConfiguration.js';
 import './upgreek/UpgreekConfiguration.js';
 import './verb/VerbConfiguration.js';
 
declare const MathJax: any;
if (typeof MathJax !== 'undefined' && MathJax.loader) {
  MathJax.loader.preLoad(
    'input/tex-base',
    '[tex]/action',
    '[tex]/ams',
    '[tex]/amscd',
    '[tex]/autoload',
    '[tex]/bbox',
    '[tex]/boldsymbol',
    '[tex]/braket',
    '[tex]/bussproofs',
    '[tex]/cancel',
    '[tex]/cases',
    '[tex]/centernot',
    '[tex]/color',
    '[tex]/colortbl',
    '[tex]/colorv2',
    '[tex]/configmacros',
    '[tex]/empheq',
    '[tex]/enclose',
    '[tex]/extpfeil',
    '[tex]/gensymb',
    '[tex]/html',
    '[tex]/mathtools',
    '[tex]/mhchem',
    '[tex]/newcommand',
    '[tex]/noerrors',
    '[tex]/noundefined',
    '[tex]/physics',
    '[tex]/require',
    '[tex]/setoptions',
    '[tex]/tagformat',
    '[tex]/textcomp',
    '[tex]/textmacros',
    '[tex]/unicode',
    '[tex]/upgreek',
    '[tex]/verb',
  );
}

export const AllPackages: string[] = [
  'base',
  'action',
  'ams',
  'amscd',
  'autoload',
  'bbox',
  'boldsymbol',
  'braket',
  'bussproofs',
  'cancel',
  'cases',
  'centernot',
  'color',
  'colortbl',
  'colorv2',
  'configmacros',
  'empheq',
  'enclose',
  'extpfeil',
  'gensymb',
  'html',
  'mathtools',
  'mhchem',
  'newcommand',
  'noerrors',
  'noundefined',
  'physics',
  'require',
  'setoptions',
  'tagformat',
  'textcomp',
  'textmacros',
  'unicode',
  'upgreek',
  'verb',
];
